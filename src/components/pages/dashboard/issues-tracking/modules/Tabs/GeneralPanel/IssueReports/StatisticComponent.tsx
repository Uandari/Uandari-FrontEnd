import { useEffect, useState } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type StatisticComponentProps = {
  total: number;
  timeStatistics: { label: string; Cantidad: number }[];
  issuesStatistics: { problem: string; quantity: number }[];
};

function StatisticComponent({
  total,
  timeStatistics,
  issuesStatistics,
}: StatisticComponentProps) {
  const [maxQuantity, setMaxQuantity] = useState(0);

  useEffect(() => {
    const maxValue = Math.max(
      ...issuesStatistics.map((issue) => issue.quantity),
    );
    setMaxQuantity(maxValue);
  }, [issuesStatistics]);

  return (
    <div>
      <h2 className="text-2xl font-medium">{total} problemas</h2>
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={timeStatistics}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <XAxis dataKey="label" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Cantidad"
              stroke="#165BAA"
              fill="#165BAA"
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-4">
          <h3 className="text-xl font-medium pb-5">
            Estadísticas de problemas
          </h3>
          {issuesStatistics.map((issue) => (
            <div className="relative">
              <div className="w-full h-[6px] rounded-full bg-main_blue_bg" />
              <div
                className="h-[6px] duration-300 transition-all  bg-main_blue_dark rounded-full absolute top-0 left-0"
                style={{
                  width: `${(issue.quantity / maxQuantity) * 100}%`,
                }}
              />
              <div className="pb-8 pt-1 flex items-center justify-between">
                <p className="text-sm text-main_text_color">{issue.problem}</p>
                <p className="text-sm text-main_text_color">
                  {issue.quantity} registros
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatisticComponent;
