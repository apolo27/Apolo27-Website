"use client";
import Image from "next/image";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidation } from "@/app/shared/utils/validations";
import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "@/app/shared/models/form";
import { Stepper, Step } from "headless-stepper/components";

import { useStepper } from "headless-stepper";
import React, { useRef } from "react";
import { Input } from "../input";
import logo from "@/app/shared/imgs/gray-logo.png";
import bus from "@/app/shared/imgs/bus.png";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { CheckBox } from "../checkBox";
import { validateSchema } from "@/app/shared/utils";
import { POST } from "@/app/api/send/route";

export const Form = () => {
  const formSchema = yup.object().shape({
    institution: yup.string().required("Institución requerida"),
    email: emailValidation,
    phoneNumber: yup.string().required("Número de teléfono requerido"),
    location: yup.string().required("Ubicación requerida"),

    activitiesRoom: yup.boolean(),
    indoorMeetings: yup.boolean(),
    laboratories: yup.boolean(),

    proyectors: yup.boolean(),
    screens: yup.boolean(),
    speakers: yup.boolean(),
    microphones: yup.boolean(),

    meetingDate: yup.date().required("Fecha de reunión requerida"),
    message: yup.string().required("Mensaje requerido"),
  });

  const form = useForm({
    mode: "onBlur",
    defaultValues: {
      institution: "",
      email: "",
      phoneNumber: "",
      location: "",

      activitiesRoom: false,
      indoorMeetings: false,
      laboratories: false,

      proyectors: false,
      screens: false,
      speakers: false,
      microphones: false,

      meetingDate: new Date(),
      message: "",
    } as FormType,
    resolver: yupResolver(formSchema),
  });

  const { handleSubmit } = form;

  const steps = React.useMemo(
    () => [
      { label: "Step 1" },
      { label: "Step 2" },
      { label: "Step 3" },
      { label: "Step 4" },
    ],
    []
  );

  const { state, nextStep, prevStep, progressProps, stepsProps, stepperProps } =
    useStepper({ steps });

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    prevStep();
  };

  const goNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (state.currentStep === 0 && (form.getValues().institution === "" || form.getValues().email === "" || form.getValues().phoneNumber === "" || form.getValues().location === "")) {
      form.setError("institution", { message: "Campo requerido" });
      form.setError("email", { message: "Campo requerido" });
      form.setError("phoneNumber", { message: "Campo requerido" });
      form.setError("location", { message: "Campo requerido" });
      return;
    }
    nextStep();
  };

  const sendForm = async () => {
    await fetch("/api/mail", {
      method: "POST",
    });
  };

  return (
    <div>
      <p>Formulario</p>
      <div className="flex rounded-xl bg-white text-black justify-center">
        <Image
          src={bus}
          width={400}
          alt="Formulario"
          className="rounded-tl-lg rounded-bl-lg object-cover"
        />

        <FormProvider {...form}>
          <form className="w-96 flex flex-col gap-5 p-4">
            <Image src={logo} width={75} alt="logo" />
            <div className="flex justify-evenly items-center" {...stepperProps}>
              {stepsProps?.map((step, index) => (
                <React.Fragment key={index}>
                  <div
                    id="circle"
                    className={`rounded-full w-5 h-5 border-double border-2 transition-colors duration-500 ease-in-out ${
                      index <= state.currentStep
                        ? "bg-red-500 border-white"
                        : "bg-gray-200"
                    } ${index <= state.currentStep ? "delay-50" : ""}`}
                    style={{
                      opacity: steps[index].disabled ? 0.6 : 1,
                    }}
                  ></div>

                  {/* Line with no delay */}
                  {index < 3 && (
                    <div
                      id="line"
                      className={`h-1 w-24 transition-colors duration-500 ease-in-out ${
                        index + 1 <= state.currentStep
                          ? "bg-red-500"
                          : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div>
              <p className="font-bold text-3xl">Contactenos</p>
              <p className="font-extralight">
                Solicite una visita a su institución
              </p>
            </div>
            <div>
              {state.currentStep === 0 && (
                <div>
                  <Input
                    placeholder="Nombre de su institucion"
                    name={"institution"}
                  />
                  <Input placeholder="Correo electronico" name="email" />
                  <Input placeholder="Numero de telefono" name="phoneNumber" />
                  <Input placeholder="Ubicacion" name="location" />
                  <button
                    className="mt-10 px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                    onClick={goNext}
                  >
                    Continuar <ArrowRightIcon className="w-4" />{" "}
                  </button>
                </div>
              )}
              {state.currentStep === 1 && (
                <div>
                  <div className="flex flex-col h-60 justify-around">

                  <CheckBox className="text-xl" label="Salon de actividades" name={"activitiesRoom"}/>
                  <CheckBox className="text-xl" label="Reuniones bajo techo" name={"indoorMeetings"}/>
                  <CheckBox className="text-xl" label="Laboratories" name={"laboratories"}/>

                  </div>
                  <div className="mt-10 flex gap-4 items-center justify-center">
                    <button
                      className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                      onClick={goBack}
                    >
                      <ArrowLeftIcon className="w-4" /> Atras
                    </button>
                    <button
                      className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                      onClick={goNext}
                    >
                      Continuar <ArrowRightIcon className="w-4" />
                    </button>
                  </div>
                </div>
              )}
              {state.currentStep === 2 && (
                <div>
                  <div className="flex flex-col h-60 justify-around">
                    <CheckBox className="text-xl" label="Proyectores" name={"proyectors"}/>
                    <CheckBox className="text-xl" label="Pantallas" name={"screens"}/>
                    <CheckBox className="text-xl" label="Parlantes" name={"speakers"}/>
                    <CheckBox className="text-xl" label="Microfonos" name={"microphones"}/>
                    </div>
                  <div className="flex gap-4 items-center justify-center">
                    
                    <button
                      className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                      onClick={goBack}
                    >
                      <ArrowLeftIcon className="w-4" /> Atras
                    </button>
                    <button
                      className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                      onClick={goNext}
                    >
                      Continuar <ArrowRightIcon className="w-4" />
                    </button>
                  </div>
                </div>
              )}
              {state.currentStep === 3 && (
                <div>
                  <Input
                    placeholder="Fecha de la reunion"
                    type="date"
                    name="meetingDate"
                  />
                  <Input placeholder="Mensaje" name="message" />
                  <div className=" my-10 flex gap-4 items-center justify-center">
                    <button
                      className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                      onClick={goBack}
                    >
                      <ArrowLeftIcon className="w-4" /> Atras
                    </button>
                    <button
                      onClick={handleSubmit(sendForm)}
                      className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                    >
                      Terminar <ArrowRightIcon className="w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div {...progressProps} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
