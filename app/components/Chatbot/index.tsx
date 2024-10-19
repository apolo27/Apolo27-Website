"use client";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../input";
import { useState } from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import parse from "html-react-parser";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [parsedMessages, setParsedMessages] = useState<string[]>([]);

  const formSchema = yup.object().shape({
    prompt: yup.string().required("Mensaje requerido"),
  });

  const form = useForm({
    mode: "onBlur",
    defaultValues: {
      prompt: "",
    },
    resolver: yupResolver(formSchema),
  });

  const { handleSubmit, reset } = form;

  async function AskApolito(prompt: string) {
    const apiKey = "AIzaSyAHtzOwh7VL80Kzp95zdyekrCTF4ypnv2U";
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        'Tu nombre es "Apolito", eres el chatbot de Apolo 27, un equipo universitario del Instituto Tecnológico de Santo domingo de la República Dominicana que participa en el NASA Human Exploration Rover Challenge cada año. Tu tarea es hablar con los visitantes de nuestra página web. Serás visible en todas partes de nuestra página para que los visitantes te puedan escribir y preguntarte acerca de Apolo 27 y el NASA HERC. Este proyecto es una iniciativa de ingeniería aeroespacial en la que los estudiantes buscan construir y lanzar un satélite de tipo cansat, un satélite miniaturizado del tamaño de una lata de refresco. El nombre Apolo 27 hace un homenaje al famoso programa Apolo de la NASA, mientras que el número 27 hace referencia al número del aula donde el equipo comenzó a trabajar en el proyecto. Este proyecto ha generado mucho entusiasmo en el ámbito educativo y tecnológico de la República Dominicana, ya que promueve el interés por la ingeniería espacial y la investigación científica entre los jóvenes. Apolo 27 es un ejemplo de cómo estudiantes pueden involucrarse en proyectos de tecnología avanzada y participar en la exploración y el desarrollo aeroespacial a nivel local.',
    });

    const generationConfig = {
      temperature: 0.8,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "Hola\n" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Hola! 👋  Soy Apolito, el chatbot de Apolo 27. ¿Qué te gustaría saber sobre nuestro equipo o el NASA Human Exploration Rover Challenge? 😄\n",
            },
          ],
        },
      ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response.text();

    const processedMessage = await remark().use(remarkHtml).process(response);

    // Append the chatbot's response to the current list of parsed messages
    setParsedMessages((prevMessages) => [
      ...prevMessages,
      processedMessage.toString(),
    ]);
  }

  const sendPrompt = async () => {
    const prompt = form.getValues("prompt");

    // Append the user's message to the current list of parsed messages
    setParsedMessages((prevMessages) => [...prevMessages, `<p>${prompt}</p>`]);

    // Ask Apolito for a response
    await AskApolito(prompt);

    reset();
  };

  return (
<div
  id="chatbot"
  className="fixed bottom-0 ml-2 bg-gradient-to-br from-slate-800 to-cyan-800 rounded-tr-md rounded-tl-md w-96"
>
  <button
    onClick={() => setOpen(!open)}
    className="p-2 w-full font-bold text-center"
  >
    Chatbot
  </button>
  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out ${
      open ? "max-h-[500px]" : "max-h-0"
    }`}
  >
    <div className={`p-2 overflow-y-scroll overflow-x-hidden h-60`}>
      {parsedMessages.map((message, index) => (
        <div
          key={index}
          className={`w-60 p-2 bg-white text-black font-semibold m-3 rounded-md ${
            index % 2 === 0 ? "ml-32" : ""
          }`}
        >
          {/* Render HTML safely */}
          {parse(message)}
        </div>
      ))}
    </div>

    <FormProvider {...form}>
      <form className="p-2 flex gap-2 mr-4">
        <Input
          className="font-semibold"
          name="prompt"
          placeholder="Escribe tu mensaje"
        />
        <button
          type="button"
          onClick={handleSubmit(sendPrompt)}
          className="rounded-md shadow px-2 w-2xl bg-white hover:bg-slate-50"
        >
          <ArrowRightIcon className="h-6 w-6 text-cyan-800" />
        </button>
      </form>
    </FormProvider>
  </div>
</div>

  );
};
