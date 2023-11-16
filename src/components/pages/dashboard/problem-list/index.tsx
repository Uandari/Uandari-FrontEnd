import Topbar from '@components/layout/topbar';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import Pareto from './modules/Tabs/Pareto';
import Quality from './modules/Tabs/Quality';
import VolumeAvailability from './modules/Tabs/VolumeAvailability';

function IssuesList() {
  const pages: TabsProps['items'] = [
    {
      key: '1',
      label: `Calidad`,
      children: <Quality />,
    },
    {
      key: '2',
      label: `Volumen / Disponibilidad`,
      children: <VolumeAvailability />,
    },
    {
      key: '3',
      label: `Diagrama de pareto`,
      children: <Pareto />,
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Listado de problemas" issues={4} />
      <div className="flex-1 overflow-y-auto bg-main_white">
        <Tabs className="h-full flex flex-1" size="large" items={pages} />
      </div>
    </div>
  );
}

export default IssuesList;
