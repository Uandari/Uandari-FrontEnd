/* eslint-disable no-nested-ternary */
import { monthGoals } from '@mocks/MonthGoals';
import { weeks } from '@mocks/StaffRotation';
import { years } from '@mocks/Years';
import { Select } from 'antd';
import {
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  PieChart,
} from 'recharts';

type GraphProps = {
  filterDay?: boolean;
  filterWeek?: boolean;
  filterMonth?: boolean;
  filterYear?: boolean;
  graph: 'PieChart' | 'BarChart' | 'LineChart';
  title: string;
  data: {
    name: string;
    Turno_A: number;
    Turno_B: number;
    Turno_C: number;
  }[];
};

function Graph({
  title,
  data,
  graph,
  filterDay,
  filterWeek,
  filterMonth,
  filterYear,
}: GraphProps) {
  const monthNames = monthGoals.map((goal) => goal.name);
  return (
    <div>
      <div className="px-4 mb-3">
        <p className="text-lg mb-3">{title} </p>
        {filterDay ? (
          <Select placeholder="Filtrar por día">
            {weeks.map((week) => (
              <div>
                {week.days.map((day) => (
                  <Select.Option key={day.date} value={day.date}>
                    {day.date}
                  </Select.Option>
                ))}
              </div>
            ))}
          </Select>
        ) : null}
        {filterWeek ? (
          <Select placeholder="Filtrar por semana">
            {weeks.map((week) => (
              <Select.Option key={week.value} value={week.value}>
                {week.value}
              </Select.Option>
            ))}
          </Select>
        ) : null}
        {filterMonth ? (
          <Select placeholder="Filtrar por mes">
            {monthNames.map((name) => (
              <Select.Option key={name} value={name}>
                {name}
              </Select.Option>
            ))}
          </Select>
        ) : null}
        {filterYear ? (
          <Select placeholder="Filtrar por año" options={years} />
        ) : null}
      </div>
      <div className="h-[450px]">
        <ResponsiveContainer width="99%" height="100%">
          <div>
            {graph === 'BarChart' ? (
              <div>BarChart</div>
            ) : graph === 'PieChart' ? (
              <div>PieChart</div>
            ) : graph === 'LineChart' ? (
              <div>LineChart</div>
            ) : null}
          </div>
          {/*  <PieChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Turno_A" stroke="#07A814" />
            <Line type="monotone" dataKey="Turno_B" stroke="#1D0F9E" />
            <Line type="monotone" dataKey="Turno_C" stroke="#CF5221" />
          </PieChart> */}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graph;

Graph.defaultProps = {
  filterDay: false,
  filterWeek: false,
  filterMonth: false,
  filterYear: false,
};
