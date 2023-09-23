import { useEffect, useState } from 'react';

import DayQuantity from './DayQuantity';

type RowBoardProps = {
  typeCategory: string;
  description: string;
  carType: string;
  days: {
    day: string;
    shifts: ShiftProps; // Use 'shifts' here
  }[];
};

type ShiftProps = {
  A: Array<number>;
  B: Array<number>;
  C: Array<number>;
};

function RowBoard({ typeCategory, description, carType, days }: RowBoardProps) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let dayTotal = 0;

    days.forEach((day) => {
      const sumA = day.shifts.A.reduce((acc, val) => acc + val, 0);
      const sumB = day.shifts.B.reduce((acc, val) => acc + val, 0);
      const sumC = day.shifts.C.reduce((acc, val) => acc + val, 0);

      dayTotal += sumA + sumB + sumC;
    });

    setTotal(dayTotal); // Update the total state
  }, [days]);

  return (
    <div className="grid grid-cols-12 py-2 border-b border-main_color">
      <div className="col-span-2 flex justify-center items-center">
        <div>
          <p className="font-medium text-main_title_color">{typeCategory}</p>
          <p className="font-normal text-main_text_color">{description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="font-medium text-main_gray"> {carType} </p>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <p className="font-medium text-main_gray">A</p>
          <p className="font-medium text-main_gray">B</p>
          <p className="font-medium text-main_gray">C</p>
        </div>
      </div>
      {days.map((day) => (
        <DayQuantity
          shiftA={day.shifts.A[0]}
          shiftB={day.shifts.B[0]}
          shiftC={day.shifts.C[0]}
        />
      ))}
      <div className="flex justify-center items-center">
        <p>{total}</p>
      </div>
    </div>
  );
}

export default RowBoard;
