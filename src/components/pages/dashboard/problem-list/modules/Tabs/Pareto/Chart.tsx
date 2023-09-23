import CalendarIcon from '@icons/calender.svg';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from 'recharts';

type ChartProps = {
  date: string;
  title: string;
  data: {
    problem: string;
    quantity: number;
  }[];
};

function Chart({ date, title, data }: ChartProps) {
  return (
    <div>
      <div className="flex gap-x-2">
        <img src={CalendarIcon} alt="calendar-icon" />
        <p className="text-main_text_color text-xs"> {date} </p>
      </div>
      <h2 className="text-main_title_color text-2xl font-medium">{title}</h2>
      <div className="h-[50vh] mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
            <XAxis dataKey="problem" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#121358" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
