import { useState } from 'react';

export default function ColorChangingBox() {
  const colors = ['main_white', 'main_red', 'main_yellow', 'main_green'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((prevIndex) =>
      prevIndex === colors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentColor = colors[currentColorIndex];

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer bg-${currentColor} border-l border-t w-full`}>
    </div>
  );
}
