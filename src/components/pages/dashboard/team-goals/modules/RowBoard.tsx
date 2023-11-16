import { useState } from 'react';

import ColorChangingBox from './ColorChangingBox';

export type RowBoardProps = {
  month: string;
  result: {
    name: string;
    days: { day: number; state: number }[];
  }[];
};

export default function RowBoard({ month, result }: RowBoardProps) {
  const daysLength = result[0]?.days?.length || 0;

  const [localDaysState, setLocalDaysState] = useState(result);

  const handleUpdateDayState = (day: number, newState: number) => {
    const updatedLocalDaysState = localDaysState.map((item) => ({
      ...item,
      days: item.days.map((d) =>
        d.day === day ? { ...d, state: newState } : d,
      ),
    }));

    // Actualiza el estado local
    setLocalDaysState(updatedLocalDaysState);
  };

  return (
    <div className=" border-main_color">
      <div className="w-full border-t h-8 flex">
        <div className="w-[280px] border-r" />
        <div className="flex flex-1">
          {Array.from({ length: daysLength }, (_, index) => (
            <div
              className="flex flex-1 border-r p-2 justify-center items-center"
              key={index}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="border-r text-center w-14 flex items-center border-y">
          <div
            style={{ transform: 'rotate(-90deg)' }}
            className="text-center w-16"
          >
            {month}
          </div>
        </div>
        <div className="col-span-2 border-t h-full w-full">
          {localDaysState.map((item) => {
            return (
              <div key={item.name} className="flex border-b w-full">
                <div className="w-[224px] ">
                  <p className="p-2 border-r">{item.name}</p>
                </div>
                {item.days.map((day) => (
                  <div
                    key={day.day}
                    className="flex flex-1 text-transparent border-r p-2 justify-center items-center relative"
                  >
                    {day.day}
                    <ColorChangingBox
                      key={day.day}
                      day={day}
                      onUpdateDayState={handleUpdateDayState}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-2 flex items-center justify-end pr-8">
        <button
          type="button"
          className="bg-main_blue_dark px-6 py-1 text-white rounded-md"
        >
          Guardar cambios del mes
        </button>
      </div>
    </div>
  );
}
