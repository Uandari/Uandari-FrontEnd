import { useEffect } from 'react';

import { goalsStatus } from '@mocks/GoalsStatus';
import { DatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import { Line, LineChart, ResponsiveContainer } from 'recharts';

export type GoalReportProps = {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
};

function GoalsReport({ year, setYear }: GoalReportProps) {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setYear(dateString);
  };

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
