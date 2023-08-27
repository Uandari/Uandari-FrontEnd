import { Tabs, TabsProps } from 'antd';

import AdministratorsTab from './AdministratorsTab';
import AllTab from './AllTab';
import CoordinatorsTab from './CoordinatorsTab';
import TeamLeadersTab from './TeamLeadersTab';
import ManagersTab from './ManagersTab';
import TechnitiansTab from './TechnitiansTab';

const itemsTabs: TabsProps['items'] = [
  {
    key: '1',
    label: 'Todos',
    children: <AllTab />,
  },
  {
    key: '3',
    label: 'Gerentes',
    children: <ManagersTab />,
  },
  {
    key: '3',
    label: 'Coordinadores',
    children: <CoordinatorsTab />,
  },
  {
    key: '4',
    label: 'Team Leaders',
    children: <TeamLeadersTab />,
  },
  {
    key: '5',
    label: 'Técnicos',
    children: <TechnitiansTab />,
  },
];

export default function CustomTabs() {
  return (
    <div className="w-full px-2">
      <Tabs defaultActiveKey="1" items={itemsTabs} />
    </div>
  );
}
