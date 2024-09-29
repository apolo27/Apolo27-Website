"use client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidation } from "@/app/shared/utils/validations";
import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "@/app/shared/models/form";

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

  return (
    <div>
      <p>Formulario</p>
      <FormProvider {...form}>
        <form>
        </form>
      </FormProvider>
    </div>
  );
};
