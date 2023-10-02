import Topbar from '@components/layout/topbar';
import { Tabs, TabsProps } from 'antd';

import UserPage from './admin-tab/index';

export default function UsersList() {
  const pages: TabsProps['items'] = [
    {
      key: '1',
      label: 'Administradores',
      children: <UserPage />,
    },
    {
      key: '2',
      label: 'Usuarios',
      children: '',
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
