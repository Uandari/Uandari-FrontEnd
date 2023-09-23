import { useEffect } from 'react';

import { goalsStatus } from '@mocks/GoalsStatus';
import { DatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs';

export type GoalReportProps = {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
};

function GoalsReport({ year, setYear }: GoalReportProps) {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setYear(dateString);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    setYear(String(currentYear));
  }, [setYear]);
  return (
    <div>
      <div className="flex justify-between pb-8">
        <h3 className="text-xl font-medium pb-3">Reporte de metas</h3>
        <DatePicker
          onChange={onChange}
          picker="year"
          defaultValue={dayjs()}
          format="YYYY"
        />
      </div>
      {goalsStatus.map((goalStatus) => (
        <div className="relative">
          <div className="w-full h-[6px] rounded-full bg-main_blue_bg" />
          <div
            className="h-[6px] duration-300 transition-all  bg-main_blue_dark rounded-full absolute top-0 left-0"
            style={{
              width: `${(goalStatus.currentGoal / goalStatus.total) * 100}%`,
            }}
          />
          <div className="pb-8 pt-1 flex items-center justify-between">
            <p className="text-sm text-main_text_color">{goalStatus.month}</p>
            <p className="text-sm text-main_text_color">
              {goalStatus.currentGoal} de {goalStatus.total}
            </p>
          </div>
        </div>
      ))}
      <button
        className="bg-main_blue_dark py-2 rounded-lg px-6 text-white"
        type="button"
      >
        Descargar reporte
      </button>
    </div>
  );
}

export default GoalsReport;
