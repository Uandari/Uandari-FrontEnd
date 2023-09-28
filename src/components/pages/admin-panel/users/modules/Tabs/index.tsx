import { Tabs, TabsProps } from 'antd';

import AllTab from './AllTab';
import DynamicTab from './FilteredTab';

const tabsTitles: Record<string, string> = {
  0: 'Todos',
  1: 'Administradores',
  2: 'Gerentes',
  3: 'Coordinadores',
  4: 'Team Leaders',
  5: 'Visualizadores',
};

const itemsTabs: TabsProps['items'] = [
  {
    key: '1',
    label: tabsTitles[0],
    children: <AllTab />,
  },
  {
    key: '2',
    label: tabsTitles[1],
    children: <DynamicTab role="Administrador" />,
  },
  {
    key: '3',
    label: tabsTitles[2],
    children: <DynamicTab role="Gerente" />,
  },
  {
    key: '4',
    label: tabsTitles[3],
    children: <DynamicTab role="Coordinador" />,
  },
  {
    key: '5',
    label: tabsTitles[4],
    children: <DynamicTab role="Team Leader" />,
  },
  {
    key: '6',
    label: tabsTitles[5],
    children: <DynamicTab role="Visualizador" />,
  },
];

export default function CustomTabs() {
  return (
    <div className="w-full px-2">
      <Tabs defaultActiveKey="1" items={itemsTabs} />
    </div>
  );
}
