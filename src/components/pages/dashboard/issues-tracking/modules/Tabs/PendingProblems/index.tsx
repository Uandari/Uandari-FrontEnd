import { IssueCardPendingMock } from '@mocks/IssuesCard';
import { Tooltip, DatePicker, Select } from 'antd';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
} from 'recharts';

import IssueCard from '../../IssueCard';

function PendingProblems() {
  const { RangePicker } = DatePicker;
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

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <div className="flex w-full flex-grow flex-1">
      <div className="grid grid-rows-1 grid-cols-3 w-full">
        <div className="col-span-2">
          <div className="flex flex-col gap-y-3 px-3">
            {IssueCardPendingMock.map((issue) => (
              <IssueCard
                id={issue.id}
                category={issue.category}
                dateCreated={issue.dateCreated}
                dateToSolveProblem={issue.dateToSolveProblem}
                participants={issue.participants}
                quantity={issue.quantity}
                status={issue.status}
                typeProblem={issue.typeProblem}
                key={issue.id}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col px-3 py-3 border-l border-main_color">
          <h2 className="text-2xl font-medium mb-4">9 problemas pendientes</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#165BAA"
                fill="#165BAA"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-lg font-medium"> Filtros </h4>
            <div>
              <p className="text-main_text_color">Fecha</p>
              <RangePicker className="w-full" />
            </div>
            <div>
              <p className="text-main_text_color">Célula</p>
              <Select
                className="w-full"
                showSearch
                mode="multiple"
                placeholder="Selecciona una célula"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'Celula 1',
                    label: 'Celula 1',
                  },
                  {
                    value: 'Celula 2',
                    label: 'Celula 2',
                  },
                  {
                    value: 'Celula 3',
                    label: 'Celula 3',
                  },
                ]}
              />
            </div>
            <div>
              <p className="text-main_text_color">Categoría</p>
              <Select
                className="w-full"
                showSearch
                placeholder="Selecciona una categoría"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'Categoría 1',
                    label: 'Categoría 1',
                  },
                  {
                    value: 'Categoría 2',
                    label: 'Categoría 2',
                  },
                  {
                    value: 'Categoría 3',
                    label: 'Categoría 3',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingProblems;
