
import Sidebar from '@components/layout/sidebar';
import SidebarTab from '@components/layout/sidebar/sidebarTab';
import IconUser from '@icons/usersIcon.svg';
import RoleIcon from '@icons/roleIcon.svg';
import UserImg from '@usersIcons/2.png';
import { Outlet} from 'react-router-dom';
import {
  ADMIN_ROLES,
  ADMIN_USERS,
} from '@routes/paths';

export default function AdminPanel() {

  return (
    <main className="flex flex-col min-w-full min-h-full h-full">
      <div className="flex flex-row h-full max-h-full">
      <Sidebar userSubtitle='Administrador' userTitle='Andrés Cordero Ramírez' userImage={UserImg}>
        <SidebarTab
          icon={IconUser}
          title="Usuarios"
          path={`${ADMIN_USERS}`}
        />
        <SidebarTab
         icon={RoleIcon}
         title="Roles"
         path={`${ADMIN_ROLES}`}
        />
        </Sidebar>
        <Outlet />
      </div>
    </main>
  );
}
