import { Tabs, TabsProps } from 'antd';

import AllTab from './AllTab';
import CoordinatorsTab from './CoordinatorsTab';
import ManagersTab from './ManagersTab';
import TeamLeadersTab from './TeamLeadersTab';
import TechnitiansTab from './TechnitiansTab';

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
