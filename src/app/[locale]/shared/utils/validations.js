import * as yup from 'yup';

export const emailValidation = yup
  .string()
  .required(`Correo requerido`)
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, `Debe ser un correo válido`);


export const phoneValidation = yup
  .string()
  .required("Teléfono requerido")
  .matches(/^(1[0-9]{10}|[0-9]{10})$/, "Teléfono inválido");