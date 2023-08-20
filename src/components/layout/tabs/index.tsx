import { Tabs, TabsProps } from 'antd';
import AdministratorsTab from './AdministratorsTab';

const itemsTabs: TabsProps['items'] = [
    {
      key: '1',
      label: 'Administradores',
      children: <AdministratorsTab />,
    },
    {
      key: '2',
      label: 'Coordinadores',
      children: <AdministratorsTab />,
    },
    {
      key: '3',
      label: 'Team Leaders',
      children: <AdministratorsTab />,
    },
  ];

export default function CustomTabs() {
  return (
    <div className="w-full px-2">
        <Tabs  defaultActiveKey="1" items={itemsTabs} />
      </div>
  );
}

