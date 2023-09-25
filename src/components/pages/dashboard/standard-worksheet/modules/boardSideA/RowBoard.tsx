import { useState } from 'react';

import ColorChangingBox from './ColorChangingBox';

export type RowBoardProps = {
  operation: string;
  result: {
    shift: string;
    weeks: { day: string; value: number }[];
  }[];
};

export default function RowBoard({ operation, result }: RowBoardProps) {
  const daysLength = result[0]?.weeks?.length || 0;

  const [localDaysState, setLocalDaysState] = useState(result);

  const handleUpdateDayState = (day: string, newState: number) => {
    const updatedLocalDaysState = localDaysState.map((item) => ({
      ...item,
      days: item.weeks.map((w) =>
      w.day === day ? { ...w, state: newState } : w,
      ),
    }));

    // Actualiza el estado local
    setLocalDaysState(updatedLocalDaysState);
  };

  return (
    <div className=" border-main_color ">
      <div className="w-full border-t h-8 flex">
        <div className=" border-r" />
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
           A
        </div>
        <div className="col-span-2 border-t h-full ">
          {localDaysState.map((item) => {
            return (
              <div key={item.shift} className="flex border-b">
                <div className="">
                  <p className="p-2 border-r">{item.shift}</p>
                </div>
                {item.weeks.map((week) => (
                  <div
                    key={week.day}
                    className="flex flex-1 text-transparent border-r p-2 justify-center items-center relative"
                  >
                    {week.day}
                    <ColorChangingBox
                      key={week.day}
                      day={week}
                      onUpdateDayState={handleUpdateDayState}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
