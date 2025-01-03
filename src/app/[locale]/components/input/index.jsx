import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { getErrorFromFormState } from "../../shared/utils/getErrorFromFormState";



export const Input = ({
  label,
  placeholder,
  type = "text",
  onBlur,
  onChange,
  className = "",
  maxLength,
  style,
  defaultValue,
  value,
  disabled,
  name,
}) => {
  const { register, formState, getValues } = useFormContext();

  const hasValue = getValues(name);
  const hasErrors = getErrorFromFormState(name, formState.errors)
    ?.message;
  const isDirty = getErrorFromFormState(name, formState.dirtyFields);
  const isValid = !hasErrors && isDirty && hasValue;
  const defaultClass = "w-full p-4 h-[48px] border rounded-md bg-[#F7F7F769]";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-md font-medium text-primary-blue"
        >
          {label}
        </label>
      )}
      <div className="relative block rounded mt-0.5">
        <input 
          id={name}
          {...register(name, {
            onBlur: onBlur,
            onChange: (e) => onChange && onChange(e?.target?.value),
          })}
          disabled={disabled}
          maxLength={maxLength}
          type={type}
          defaultValue={defaultValue}
          value={value}
          className={`${defaultClass} ${className}`}
          placeholder={placeholder}
          style={style}
        />
        {hasErrors && (
          <div
            className={`text-dark-orange text-xs items-center flex right-0 top-0 pr-3 bottom-0 absolute pointer-events-none`}
          >
            <ExclamationCircleIcon width={20} height={20} />
          </div>
        )}

        {(isValid) && (
          <div
            className={`text-green-3 text-xs items-center flex right-0 top-0 pr-3 bottom-0 absolute pointer-events-none`}
          >
            <CheckCircleIcon width={20} height={20} />
          </div>
        )}
      </div>
      <div className="text-dark-orange text-sm flex flex-end">
        <ErrorMessage name={name} errors={formState.errors} />
      </div>
    </div>
  );
};
