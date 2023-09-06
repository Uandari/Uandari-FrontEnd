import { Tabs, TabsProps } from 'antd';

import AdministratorsTab from './AdministratorsTab';
import AllTab from './AllTab';
import CoordinatorsTab from './CoordinatorsTab';
import ManagersTab from './ManagersTab';
import TeamLeadersTab from './TeamLeadersTab';
import VisualizersTab from './VisualizersTab';

const itemsTabs: TabsProps['items'] = [
  {
    key: '1',
    label: 'Todos',
    children: <AllTab />,
  },
  {
    key: '2',
    label: 'Gerentes',
    children: <ManagersTab />,
  },
  {
    key: '3',
    label: 'Administradores',
    children: <AdministratorsTab />,
  },
  {
    key: '4',
    label: 'Coordinadores',
    children: <CoordinatorsTab />,
  },
  {
    key: '5',
    label: 'Team Leaders',
    children: <TeamLeadersTab />,
  },
  {
    key: '6',
    label: 'Visualizadores',
    children: <VisualizersTab />,
  },
];

export default function CustomTabs() {
  return (
    <div className="w-full px-2">
      <Tabs defaultActiveKey="1" items={itemsTabs} />
    </div>
  );
}
