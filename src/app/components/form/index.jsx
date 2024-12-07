'use client';
import Image from 'next/image';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  emailValidation,
  phoneValidation,
} from '../../shared/utils/validations';
import { FormProvider, useForm } from 'react-hook-form';
import { useStepper } from 'headless-stepper';
import React, { useRef } from 'react';
import { Input } from '../input';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import { CheckBox } from '../checkBox';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const formRef = useRef(null);

  const formSchema = yup.object().shape({
    institution: yup.string().required('Institución requerida'),
    email: emailValidation,
    phoneNumber: phoneValidation,
    location: yup.string().required('Ubicación requerida'),

    activitiesRoom: yup.boolean(),
    indoorMeetings: yup.boolean(),
    laboratories: yup.boolean(),

    proyectors: yup.boolean(),
    screens: yup.boolean(),
    speakers: yup.boolean(),
    microphones: yup.boolean(),

    meetingDate: yup.date().required('Fecha de reunión requerida'),
    message: yup.string().required('Mensaje requerido'),
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      institution: '',
      email: '',
      phoneNumber: '',
      location: '',
      activitiesRoom: false,
      indoorMeetings: false,
      laboratories: false,
      proyectors: false,
      screens: false,
      speakers: false,
      microphones: false,
      meetingDate: new Date(),
      message: '',
    },
    resolver: yupResolver(formSchema),
  });

  const { handleSubmit, reset } = form;

  const steps = React.useMemo(
    () => [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' },
      { label: 'Step 4' },
    ],
    []
  );

  const { state, nextStep, prevStep, progressProps, stepsProps, stepperProps } =
    useStepper({ steps });

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  const goNext = (e) => {
    e.preventDefault();
    if (
      state.currentStep === 0 &&
      (form.getValues().institution === '' ||
        form.getValues().email === '' ||
        form.getValues().phoneNumber === '' ||
        form.getValues().location === '')
    ) {
      form.setError('institution', { message: 'Campo requerido' });
      form.setError('email', { message: 'Campo requerido' });
      form.setError('phoneNumber', { message: 'Campo requerido' });
      form.setError('location', { message: 'Campo requerido' });
      return;
    }
    nextStep();
  };

  const sendForm = () => {
    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        formRef.current,
        process.env.EMAIL_JS_USER
      )
      .then(
        (result) => {
          alert('Formulario enviado correctamente');
          reset();
          state.currentStep = 0;
        },
        (error) => {
          alert('Error al enviar el formulario: ' + error.text);
        }
      );
  };

  return (
    <div className="w-5/6 md:w-full flex flex-col lg:flex-row rounded-xl bg-white text-black justify-center mt-8">
      <div className="lg:w-1/2 w-full flex justify-center">
        <Image
          src="/images/stem-with-us/bus.webp"
          width={500}
          height={200}
          alt="Formulario"
          className="hidden md:block rounded-tl-lg rounded-bl-lg object-contain max-w-full h-auto opacity-60 lg:opacity-100"
        />
      </div>

      <FormProvider {...form}>
        <form ref={formRef} className="lg:w-1/2 w-full flex flex-col gap-5 p-8 lg:p-4">
          <Image
            src="/images/logos/gray-logo.webp"
            height={100}
            width={100}
            alt="logo"
            className="mx-auto lg:opacity-100"
          />

          <div className="flex justify-evenly items-center" {...stepperProps}>
            {stepsProps?.map((step, index) => (
              <React.Fragment key={index}>
                <div
                  id="circle"
                  className={`rounded-full w-5 h-5 border-double border-2 transition-colors duration-500 ease-in-out ${
                    index <= state.currentStep
                      ? 'bg-red-500'
                      : 'bg-gray-200'
                  } ${index <= state.currentStep ? 'delay-50' : ''}`}
                  style={{
                    opacity: steps[index].disabled ? 0.6 : 1,
                  }}
                ></div>
                {index < 3 && (
                  <div
                    id="line"
                    className={`h-1 w-24 transition-colors duration-500 ease-in-out ${
                      index + 1 <= state.currentStep
                        ? 'bg-red-500'
                        : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div>
            <p className="font-bold text-3xl text-center">Contáctenos</p>
            <p className="font-extralight text-center">
              Solicite una visita a su institución
            </p>
          </div>

          <div>
            {state.currentStep === 0 && (
              <div className="block space-y-3">
                <Input
                  placeholder="Nombre de su institución"
                  name={'institution'}
                />
                <Input placeholder="Correo electrónico" name="email" />
                <Input placeholder="Número de teléfono" name="phoneNumber" />
                <Input placeholder="Ubicación" name="location" />
                <button
                  className="mt-10 px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB] justify-center"
                  onClick={goNext}
                >
                  Continuar <ArrowRightIcon className="w-4" />
                </button>
              </div>
            )}

            {state.currentStep === 1 && (
              <div className="block">
                <div className="space-y-3 flex flex-col h-60 justify-around">
                  <CheckBox
                    className="text-xl"
                    label="Salón de actividades"
                    name={'activitiesRoom'}
                  />
                  <CheckBox
                    className="text-xl"
                    label="Reuniones bajo techo"
                    name={'indoorMeetings'}
                  />
                  <CheckBox
                    className="text-xl"
                    label="Laboratorios"
                    name={'laboratories'}
                  />
                </div>
                <div className="mt-10 flex gap-4 items-center justify-center">
                  <button
                    className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                    onClick={goBack}
                  >
                    <ArrowLeftIcon className="w-4" /> Atrás
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
              <div className="block">
                <div className="space-y-3 flex flex-col h-60 justify-around">
                  <CheckBox
                    className="text-xl"
                    label="Proyectores"
                    name={'proyectors'}
                  />
                  <CheckBox
                    className="text-xl"
                    label="Pantallas"
                    name={'screens'}
                  />
                  <CheckBox
                    className="text-xl"
                    label="Parlantes"
                    name={'speakers'}
                  />
                  <CheckBox
                    className="text-xl"
                    label="Micrófonos"
                    name={'microphones'}
                  />
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <button
                    className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                    onClick={goBack}
                  >
                    <ArrowLeftIcon className="w-4" /> Atrás
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
              <div className="block">
                <div className='space-y-3 pb-5'>
                  <Input type="date" name="meetingDate" className="text-xl" />
                  <Input
                    type="text"
                    name="message"
                    placeholder="Mensaje adicional"
                    className="text-xl"
                  />
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <button
                    className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                    onClick={goBack}
                  >
                    <ArrowLeftIcon className="w-4" /> Atrás
                  </button>
                  <button
                    className="px-2 py-1 border-2 font-semibold rounded-md flex gap-3 items-center text-[#0069DB]"
                    onClick={handleSubmit(sendForm)}
                  >
                    Enviar <ArrowRightIcon className="w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
