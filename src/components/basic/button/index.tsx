import { ReactNode, MouseEvent } from 'react';

type ButtonProps = {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'error';
  icon?: ReactNode;
  disabled?: boolean;
};

const getVariantClassName = (variant: string, disabled?: boolean): string => {
  if (disabled) {
    return 'bg-gray text-white px-4 py-2 rounded-md';
  }

  switch (variant) {
    case 'primary':
      return 'bg-primary text-white px-4 py-2 rounded-md';
    case 'secondary':
      return 'bg-secondary text-white px-4 py-2 rounded-md';
    case 'error':
      return 'bg-error text-white px-4 py-2 rounded-md';
    default:
      return '';
  }
};

export default function CustomButton({
  text,
  onClick,
  variant = 'primary',
  icon,
  disabled,
}: ButtonProps) {
  let className = 'w-full flex justify-center items-center';
  if (variant) {
    className += ` ${getVariantClassName(variant, disabled)}`;
  }

  return (
    
    <button type="button" className={className} onClick={onClick}>
      {icon && <span className="mr-[0.5rem]">{icon}</span>}
      {text}
    </button>
  );
}

CustomButton.defaultProps = {
  variant: 'primary',
  icon: undefined,
  disabled: false,
};
