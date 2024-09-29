import { UseFormReturn } from 'react-hook-form';
import { ObjectSchema } from 'yup';

export const validateSchema = <T>(
  schema: ObjectSchema<T | any>,
  form: UseFormReturn<T | any>
): Promise<boolean> => {
  return new Promise(async (res) => {
    try {
      const isValid = await form.trigger();
      schema.validateSync(form.getValues());
      res(isValid);
    } catch (error) {
      res(false);
    }
  });
};
