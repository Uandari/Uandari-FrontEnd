import HeadBoard from './modules/HeadBoard';

export default function Board() {
  // Arreglo de horas a representar
  const months = [
    { month: 'January', days: 31 },
    { month: 'February', days: 28 },
    { month: 'March', days: 31 },
    { month: 'April', days: 30 },
    { month: 'May', days: 31 },
    { month: 'June', days: 30 },
    { month: 'July', days: 31 },
    { month: 'August', days: 31 },
    { month: 'September', days: 30 },
    { month: 'Octuber', days: 31 },
    { month: 'November', days: 30 },
    { month: 'December', days: 31 },
  ];

  return (
    <div className="h-full grid grid-rows-[7]">
      {months.map((monthInfo) => (
        <div className="row-span-1 border-t border-main_color">
          <HeadBoard days={monthInfo.days} />
        </div>
      ))}
    </div>
  );
}
