import { ChangeEvent } from 'react';

import { Input, Space } from 'antd';

type ButtonProps = {
  placeholder?: string;
  startIcon?: string | undefined;
  endIcon?: string | undefined;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string | undefined;
};

export default function CustomInput({
  placeholder,
  startIcon,
  endIcon,
  type,
  id,
  name,
  value,
  onChange,
  className,
}: ButtonProps) {
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
  );
}

CustomInput.defaultProps = {
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
