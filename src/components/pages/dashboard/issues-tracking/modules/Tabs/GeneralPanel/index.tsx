import CardStatistics from '@components/basic/card_statistics/index';
import { currentYearResults } from '@mocks/CurrentYearResults';
import { IssueCardMock } from '@mocks/IssuesCard';
import { monthResults } from '@mocks/MonthResults';
import { semesterResult } from '@mocks/SemesterResult';
import { totalResults } from '@mocks/TotalResults';
import { weekResults } from '@mocks/WeekResult';
import { yearStatusIssues } from '@mocks/YearStatusIssues';
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

import Total from './IssueReports/StatisticComponent';
import IssueCard from '../../IssueCard';

function GeneralPanel() {
  const pages: TabsProps['items'] = [
    {
      key: '1',
      label: 'Total',
      children: (
        <Total
          key="Total"
          issuesStatistics={totalResults.issuesStatistics}
          total={totalResults.total}
          timeStatistics={totalResults.yearStatistics}
        />
      ),
    },
    {
      key: '2',
      label: 'Año actual',
      children: (
        <Total
          key="Total"
          issuesStatistics={currentYearResults.issuesStatistics}
          total={currentYearResults.total}
          timeStatistics={currentYearResults.yearStatistics}
        />
      ),
    },
    {
      key: '3',
      label: 'Mes actual',
      children: (
        <Total
          key="Total"
          issuesStatistics={monthResults.issuesStatistics}
          total={monthResults.total}
          timeStatistics={monthResults.yearStatistics}
        />
      ),
    },
    {
      key: '4',
      label: 'Semana actual',
      children: (
        <Total
          key="Total"
          issuesStatistics={weekResults.issuesStatistics}
          total={weekResults.total}
          timeStatistics={weekResults.yearStatistics}
        />
      ),
    },
  ];
  return (
    <div className="flex w-full flex-grow flex-1">
      <div className="grid grid-rows-1 grid-cols-3 w-full">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-x-4 px-4">
            {yearStatusIssues.map((card) => (
              <CardStatistics
                percentage={card.percentage}
                title={card.name}
                quantity={card.quantity}
                description="problemas"
              />
            ))}
          </div>
          <div className="w-full h-[300px] my-4">
            <ResponsiveContainer width="99%">
              <LineChart
                height={300}
                width={500}
                data={semesterResult}
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
                  dataKey="Disponibilidad"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="Desempeño" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Calidad" stroke="#AF8B27" />
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
