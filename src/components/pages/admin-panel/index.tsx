import Sidebar from '@components/layout/sidebar';
import SidebarTab from '@components/layout/sidebar/sidebarTab';
import IconCell from '@icons/cell.svg';
import IconLine from '@icons/chart-line.svg';
import IconRole from '@icons/roleIcon.svg';
import IconUser from '@icons/usersIcon.svg';
import {
  ADMIN_CELLS,
  ADMIN_LINES,
  ADMIN_ROLES,
  ADMIN_USERS,
} from '@routes/paths';
import UserImg from '@usersIcons/2.png';
import { Outlet } from 'react-router-dom';

export default function AdminPanel() {
  return (
    <main className="flex flex-col min-w-full min-h-full h-full">
      <div className="flex flex-row h-full max-h-full">
        <Sidebar
          userSubtitle="Administrador"
          userTitle="Andrés Cordero Ramírez"
          userImage={UserImg}
        >
          <SidebarTab
            icon={IconUser}
            title="Usuarios"
            path={`${ADMIN_USERS}`}
          />
          <SidebarTab icon={IconCell} title="Células" path={`${ADMIN_CELLS}`} />
          <SidebarTab icon={IconLine} title="Líneas" path={`${ADMIN_LINES}`} />
          <SidebarTab icon={IconRole} title="Roles" path={`${ADMIN_ROLES}`} />
        </Sidebar>
        <Outlet />
      </div>
    </main>
  );
}
