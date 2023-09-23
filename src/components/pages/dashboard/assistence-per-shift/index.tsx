import Topbar from '@components/layout/topbar';
import { Tabs, TabsProps } from 'antd';

import AssitenceTab from './modules/Tabs/Assitance/AssitenceTab';
import HistoricalTab from './modules/Tabs/Historical/HistoricalTab';

const pages: TabsProps['items'] = [
  {
    key: '1',
    label: 'Asistencia del día de hoy',
    children: <AssitenceTab />,
  },
  {
    key: '2',
    label: 'Histórico de asistencias',
    children: <HistoricalTab />,
  },
];

export default function AssistencePerShift() {
  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Asistencia por turno" variant="primary" />
      <div className="flex flex-1 overflow-y-scroll bg-main_white">
        <Tabs className="h-full flex flex-1 " size="large" items={pages} />
      </div>
    </div>
  );
}
