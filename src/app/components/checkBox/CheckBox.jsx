import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';

export const CheckBox= ({
  label,
  onCheck,
  selected,
  value,
  isLink,
  onLinkClicked,
  className,
  name,
  disabled
}) => {
  const { register, formState } = useFormContext();

  return (
    <label className={`${className ? className : 'inline-flex items-center '}`}>
      <div className='flex justify-items-center items-center'>
        <input
          {...register(name, {
            onChange: (e) => onCheck && onCheck(e.target.checked),
          })}
          name={name}
          value={value}
          disabled={disabled}
          type="checkbox"
          className="form-checkbox h-5 w-5 text-white cursor-pointer"
          checked={selected}
        />
        <span className='ml-2 text-md text-gray-700 col-span-1 font-semibold'>
          {isLink && (
            <button
              onClick={() => onLinkClicked && onLinkClicked()}
              className='font-normal text-sm hover:underline'
            >
              {label}
            </button>
          )}

          {!isLink && label}
        </span>
      </div>

      <div className='text-red-500 text-sm flex flex-end'>
        <ErrorMessage name={name} errors={formState.errors} />
      </div>
    </label>
  );
};
