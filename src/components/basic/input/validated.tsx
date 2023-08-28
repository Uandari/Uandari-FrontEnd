/* import { ChangeEvent } from 'react';

import { Input, Space } from 'antd';

interface ValidatedFormInputProps {
  placeholder?: string;
  startIcon?: string | undefined;
  endIcon?: string | undefined;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  className?: string | undefined;
}

export default function ValidatedFormInput({
  type,
  id,
  name,
  value,
  onChange,
  className,
}: ValidatedFormInputProps) {
  
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Space wrap>
      {startIcon && ( // Verificar si startIcon tiene valor
        <img
          className="site-form-item-icon"
          src={startIcon}
          alt={`${placeholder} start icon`}
        />
      )}
      <Input
        className={className} // Agregar la clase "w-full" para que ocupe todo el ancho disponible
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        suffix={
          endIcon && ( // Verificar si endIcon tiene valor
            <img
              className="site-form-item-icon"
              src={endIcon}
              alt={`${placeholder} end icon`}
            />
          )
        }
      />
    </Space>

    <div className="relative">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}

      <input
        type={showPassword ? 'text' : type}
        id={id}
        name={name}
        className={twMerge(
          'bg-white border-lightGray text-black border rounded-lg px-3 py-3 w-full text-base outline-none',
          type === 'password' ? 'pr-10' : '',
          error ? 'border-red-500' : '',
        )}
        value={data}
        onChange={onChange}
      />

      {type === 'password' && (
        <button
          type="button"
          className={twMerge(
            'absolute right-3 transform -translate-y-1/2',
            name === 'password' && error ? 'top-1/3' : 'top-1/2',
          )}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <EyeClosed /> : <EyeOpened />}
        </button>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

ValidatedFormInput.defaultProps = {
  placeholder: undefined,
  startIcon: undefined,
  endIcon: undefined,
  type: undefined,
  id: undefined,
  name: undefined,
  value: undefined,
  onChange: undefined,
  className: undefined,
};
 */
