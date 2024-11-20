'use client';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../input';
import { useState } from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import parse from 'html-react-parser';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require('@google/generative-ai');

export const Chatbot = ({ isSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const [parsedMessages, setParsedMessages] = useState([]);

  const formSchema = yup.object().shape({
    prompt: yup.string().required('Mensaje requerido'),
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      prompt: '',
    },
    resolver: yupResolver(formSchema),
  });

  const { handleSubmit, reset } = form;

  async function AskApolito(prompt) {
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction:
        'Tu nombre es "Apolito", eres el chatbot de Apolo 27...',
    });

    const chat = model.startChat({
      generationConfig: {
        temperature: 0.8,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: 'text/plain',
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response.text();

    const processedMessage = await remark().use(remarkHtml).process(response);

    setParsedMessages((prevMessages) => [
      ...prevMessages,
      processedMessage.toString(),
    ]);
  }

  const sendPrompt = async (values, event) => {
    event.preventDefault();
    const prompt = form.getValues('prompt');

    setParsedMessages((prevMessages) => [...prevMessages, `<p>${prompt}</p>`]);

    await AskApolito(prompt);

    reset();
  };

  if (isSidebarOpen) return null;

  return (
    <div
      id="chatbot"
      className={`fixed bottom-0 right-4 bg-white rounded-lg shadow-lg w-72 z-50 transition-transform transform duration-300 ${
        open ? 'scale-105' : ''
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-12 flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-lg transition-all duration-300"
      >
        <span className="text-white text-xl font-bold">💬</span>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="p-2 overflow-y-auto h-64 bg-gray-50 rounded-b-lg">
          {parsedMessages.map((message, index) => (
            <div
              key={index}
              className={`p-2 my-1 rounded-xl shadow-md text-sm font-medium ${
                index % 2 === 0
                  ? 'bg-blue-100 text-right'
                  : 'bg-white text-left'
              }`}
            >
              {parse(message)}
            </div>
          ))}
        </div>

        <FormProvider {...form}>
          <form
            onSubmit={handleSubmit(sendPrompt)}
            className="p-2 flex items-center gap-1 bg-gray-100 rounded-b-lg"
          >
            <Input
              className="flex-grow p-1 rounded-md border border-gray-300 focus:ring focus:ring-indigo-300 focus:outline-none"
              name="prompt"
              placeholder="Escribe tu mensaje..."
            />
            <button
              type="submit"
              className="p-1 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:ring focus:ring-indigo-400"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
