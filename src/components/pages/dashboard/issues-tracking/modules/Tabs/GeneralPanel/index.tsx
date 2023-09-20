import { IssueCardMock } from '@mocks/IssuesCard';
import { Tabs, TabsProps } from 'antd';
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

import ActualMonth from './IssueReports/ActualMonth';
import ActualWeek from './IssueReports/ActualWeek';
import ActualYear from './IssueReports/ActualYear';
import Total from './IssueReports/Total';
import CardStatistics from '../../CardStatistics';
import IssueCard from '../../IssueCard';

function GeneralPanel() {
  const pages: TabsProps['items'] = [
    {
      key: '1',
      label: 'Total',
      children: <Total />,
    },
    {
      key: '2',
      label: 'Año actual',
      children: <ActualYear />,
    },
    {
      key: '3',
      label: 'Mes actual',
      children: <ActualMonth />,
    },
    {
      key: '4',
      label: 'Semana actual',
      children: <ActualWeek />,
    },
  ];
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div className="flex w-full flex-grow flex-1">
      <div className="grid grid-rows-1 grid-cols-3 w-full">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-x-4 px-4">
            <CardStatistics
              percentage="25"
              type="Problemas pendientes"
              quantity="18"
            />

            <CardStatistics
              percentage="-25"
              type="Problemas resuletos"
              quantity="18"
            />

            <CardStatistics
              percentage="25"
              type="Problemas escalados"
              quantity="18"
            />
          </div>
          <div className="w-full h-[300px] my-4">
            <ResponsiveContainer width="99%" aspect={3.2}>
              <LineChart
                height={300}
                width={500}
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
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-y-3 px-3">
            {IssueCardMock.map((issue) => (
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
          <div>
            <h3 className="text-xl font-medium px-3 mb-3">
              Reporte de problemas
            </h3>
            <Tabs className="h-full flex flex-1 " size="small" items={pages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralPanel;

/* 



*/
