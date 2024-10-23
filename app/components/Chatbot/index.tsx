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

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [parsedMessages, setParsedMessages] = useState<string[]>([]);

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

  async function AskApolito(prompt: string) {
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

  const sendPrompt = async (values: any, event: any) => {
    event.preventDefault();
    const prompt = form.getValues('prompt');

    setParsedMessages((prevMessages) => [...prevMessages, `<p>${prompt}</p>`]);

    await AskApolito(prompt);

    reset();
  };

  return (
    <div
      id="chatbot"
      className="fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl w-80 z-50 transition-transform transform hover:scale-105 duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-2 font-bold text-white text-lg flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-lg"
      >
        <span className="ml-4">💬 Apolito Chat</span>
        <ArrowRightIcon
          className={`h-6 w-6 mr-4 transform transition-transform ${
            open ? 'rotate-90' : ''
          }`}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? 'max-h-[500px] h-auto' : 'max-h-0'
        }`}
      >
        <div className="p-4 overflow-y-auto h-60 bg-gray-50">
          {parsedMessages.map((message, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-xl shadow-md text-sm font-medium ${
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
            className="p-2 flex items-center gap-2 bg-gray-100"
          >
            <Input
              className="flex-grow p-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-300 focus:outline-none"
              name="prompt"
              placeholder="Escribe tu mensaje..."
            />
            <button
              type="submit"
              className="p-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:ring focus:ring-indigo-400"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
