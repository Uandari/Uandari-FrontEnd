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
    <div className="grid grid-cols-12 row-span-6">
      <div className="grid grid-cols-9 col-span-2">
        <div className="grid col-span-6 border-b border-r items-center justify-center">
          {operation}
        </div>
        <div className="grid col-span-3 grid-rows-3">
          {localDaysState.map((item) => {
            return (
              <div className="flex items-center justify-center border-b">
                {item.shift}
              </div>
            );
          })}

        </div>
      </div>
      <div className="grid grid-rows-3 col-span-10">
          {localDaysState.map((item) => {
            return (
              <div key={item.shift} className="flex border-b">
                {item.weeks.map((week) => (
                  <div
                    key={week.day}
                    className="flex flex-1 text-transparent border-l p-2 justify-center items-center relative"
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

  );
}
