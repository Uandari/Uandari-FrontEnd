import Topbar from '@components/layout/topbar';
import { Tabs, TabsProps } from 'antd';

import AdminPage from './admin-tab';
import UserPage from './user-tab';

export default function UsersList() {
  const pages: TabsProps['items'] = [
    {
      key: '1',
      label: 'Administradores',
      children: <AdminPage />,
    },
    {
      key: '2',
      label: 'Usuarios',
      children: <UserPage />,
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Gestión de usuarios" variant="secondary" />
      <div className="flex-1 overflow-y-auto bg-main_white">
        <Tabs className="h-full flex flex-1" size="large" items={pages} />
      </div>
    </div>
  );
}
