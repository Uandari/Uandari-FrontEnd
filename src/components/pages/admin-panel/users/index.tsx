import Topbar from '@components/layout/topbar';
import { Tabs, TabsProps } from 'antd';

import TabPage from './TabPage';

export default function UsersList() {
  const itemsTabs: TabsProps['items'] = [
    {
      key: '1',
      label: 'Administradores',
      children: <TabPage />,
    },
    {
      key: '2',
      label: 'Usuarios',
      children: '',
    },
  ];

  return (
    <div className="border border-b grid bg-white flex-1 h-screen">
      <div className="sticky top-0">
        <Topbar title="Gestión de usuarios" variant="secondary" />
        <Tabs defaultActiveKey="1" items={itemsTabs} />
      </div>
    </div>
  );
}
