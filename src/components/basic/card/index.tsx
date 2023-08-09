import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  onCardClick?: () => void;
};

export default function CustomCard({ children, onCardClick }: CardProps) {
  if (onCardClick) {
    return (
      <button
        type="button"
        onClick={onCardClick}
        className="flex items-center bg-white rounded mb-4 border-none bg-transparent p-4 cursor-pointer w-full focus:outline-none"
      >
        {children}
      </button>
    );
  }
  return (
    <div className="flex items-center bg-white rounded p-4 mb-4 ">
      {children}
    </div>
  );
}

CustomCard.defaultProps = {
  onCardClick: null,
};
