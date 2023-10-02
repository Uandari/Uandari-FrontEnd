import { useEffect, useMemo, useState } from 'react';

type ColorChangingBoxProps = {
  day: { day: string; state: number };
  onUpdateDayState: (day: string, newState: number) => void;
};

export default function ColorChangingBox({
  day,
  onUpdateDayState,
}: ColorChangingBoxProps) {
  // Allows to render just once, and not every time the component renders useMemo
  const colors = useMemo(() => ['main_white', 'main_red', 'main_green'], []);
  const [currentColorIndex, setCurrentColorIndex] = useState(day.state);
  const [currentColor, setCurrentColor] = useState('');

  const handleClick = () => {
    // Calcula el índice del próximo color en función del estado actual
    const nextColorIndex = (currentColorIndex + 1) % colors.length;

    // Actualiza el estado y el color actual
    setCurrentColorIndex(nextColorIndex);
    onUpdateDayState(day.day, nextColorIndex);
  };
  useEffect(() => {
    setCurrentColor(colors[currentColorIndex]);
  }, [colors, currentColorIndex]);
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`cursor-pointer bg-${currentColor} h-full w-full absolute top-0 left-0`}
      aria-label="Change value and color"
    />
  );
}


