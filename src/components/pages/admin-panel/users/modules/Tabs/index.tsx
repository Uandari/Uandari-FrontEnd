import { Tabs, TabsProps } from 'antd';

import DynamicTab from './DynamicTab';

const tabsTitles: Record<string, string> = {
  0: 'Todos',
  1: 'Gerente',
  2: 'Administrador',
  3: 'Coordinador',
  4: 'Team Leader',
  5: 'Visualizador',
};

const itemsTabs: TabsProps['items'] = [
  {
    key: '1',
    label: tabsTitles[0],
    children: <DynamicTab allUsersTab />,
  },
  {
    key: '2',
    label: tabsTitles[1],
    children: <DynamicTab idRole={1} />,
  },
  {
    key: '3',
    label: tabsTitles[2],
    children: <DynamicTab idRole={2} />,
  },
  {
    key: '4',
    label: tabsTitles[3],
    children: <DynamicTab idRole={3} />,
  },
  {
    key: '5',
    label: tabsTitles[4],
    children: <DynamicTab idRole={4} />,
  },
  {
    key: '6',
    label: tabsTitles[5],
    children: <DynamicTab idRole={5} />,
  },
];

export default function CustomTabs() {
  return (
    <div className="w-full px-2">
      <Tabs defaultActiveKey="1" items={itemsTabs} />
    </div>
  );
}
