import { DatePicker, DatePickerProps } from 'antd';
import {
  ResponsiveContainer,
  Tooltip,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
} from 'recharts';

type GraphProps = {
  name: string;
  data: {
    name: string;
    Turno_A: number;
    Turno_B: number;
    Turno_C: number;
  }[];
};

function Graph({ name, data }: GraphProps) {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <div className="px-4 mb-3">
        <p className="text-lg mb-3">{name} </p>
        <DatePicker className="w-[250px] " onChange={onChange} picker="week" />
      </div>
      <div className="h-[450px]">
        <ResponsiveContainer width="99%" height="100%">
          <LineChart
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
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graph;
