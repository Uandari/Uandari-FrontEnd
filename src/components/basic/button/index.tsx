import { MouseEvent } from 'react';

import { Button, Space } from 'antd';

type ButtonProps = {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'dashed' | 'text' | 'link' | undefined;
  icon?: string | undefined; // Cambiado a string | undefined
  size: 'small' | 'large';
  className?: string | undefined;
};

const getVariantClassName = (variant: string): string => {
  switch (variant) {
    case 'primary':
      return 'bg-main_blue_dark';
    case 'dashed':
      return 'text-main_blue_dark';
    case 'text':
      return '';
    case 'link':
      return 'text-main_blue_dark font-bold';
    default:
      return '';
  }
};

export default function CustomButton({
  text,
  onClick,
  variant,
  icon,
  size,
  className,
}: ButtonProps) {
  className = 'w-full flex justify-center items-center';
  if (variant) {
    className += ` ${getVariantClassName(variant)}`;
  }

  return (
    <Space wrap>
      <Button
        type={variant}
        className={className}
        onClick={onClick}
        size={size}
      >
        {icon && (
          <img
            className="site-form-item-icon mr-4"
            src={icon}
            alt={`${text} start icon`}
          />
        )}
        {text}
      </Button>
    </Space>
  );
}

CustomButton.defaultProps = {
  variant: undefined,
  startIcon: undefined,
  onClick: undefined,
};
