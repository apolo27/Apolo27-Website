export const getErrorFromFormState = (propertyName: string, formState: any) => {
  if (!propertyName.includes('.')) {
    return formState[propertyName];
  }

  const nestedProperties = propertyName.split('.');
  let error = formState;

  for (const prop of nestedProperties) {
    if (error && error[prop]) {
      error = error[prop];
    } else {
      return null;
    }
  }

  return error;
};
