import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { getErrorFromFormState } from "@/app/shared/utils";

interface InputProps {
  type?:
  | "text"
  | "file"
  | "email"
  | "number"
  | "password"
  | "date"
  | "color"
  | "tel"
  | "radio"
  | "checkbox";
  placeholder?: string;
  label?: string;
  defaultValue?: string | number;
  value?: string | number;
  name: string;
  onBlur?: () => void;
  className?: string;
  maxLength?: number;
  uppercase?: boolean;
  outline?: boolean;
  accept?: string;
  style?: any;
  disabled?: boolean;
  onChange?: (e: string) => void;
}

export const Input: FC<InputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  onBlur,
  onChange,
  className = "",
  maxLength,
  accept,
  style,
  defaultValue,
  value,
  disabled
}) => {
  const { register, formState, getValues } = useFormContext();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const hasValue = getValues(name);
  const hasErrors = getErrorFromFormState(name, formState.errors)
    ?.message as string;
  const isDirty = getErrorFromFormState(name, formState.dirtyFields) as boolean;
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
          {...register(name, {
            onBlur: onBlur,
            onChange: (e: any) => onChange && onChange(e?.target?.value),
          })}
          autoCapitalize={'on'}
          disabled={disabled}
          maxLength={maxLength}
          type={type === "password" && isPasswordVisible ? "text" : type}
          name={name}
          defaultValue={defaultValue}
          value={value}
          id={name}
          className={`${defaultClass} ${className}`}
          placeholder={placeholder}
          aria-invalid="true"
          aria-describedby={`${name}-error`}
          accept={accept}
          style={style}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            {isPasswordVisible ? (
              <EyeSlashIcon width={20} height={20} />
            ) : (
              <EyeIcon width={20} height={20} />
            )}
          </button>
        )}
        {hasErrors && (
          <div
            className={`text-dark-orange text-xs items-center flex right-0 top-0 pr-3 bottom-0 absolute pointer-events-none`}
          >
            <ExclamationCircleIcon width={20} height={20} />
          </div>
        )}

        {(isValid && type !== 'password') && (
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
