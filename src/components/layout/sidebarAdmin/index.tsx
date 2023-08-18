import IconUser from '@assets/iconUser.svg';
import RoleIcon from '@assets/roleIcon.svg';
import UserImg from '@assets/UserImg.png';
import {
  ADMIN_ROLES,
  ADMIN_USERS,
} from '@routes/paths';

import Tab from './tab';

export default function SidebarAdmin() {
  return (
    <aside className="border border-main_color bg-main_color flex flex-col h-screen text-left w-[360px] px-4 py-6 gap-1 bg-primary overflow-y-auto">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <img className="w-10 h-10" src={UserImg} alt="user_image" />
          <div>
            <h4 className="text-main_title_color font-medium">
              Usuario Volkswagen
            </h4>
            <p className="text-main_text_color text-xs ">Coordinador</p>
          </div>
        </div>
        <Tab
          icon={IconUser}
          title="Usuarios"
          path={`${ADMIN_USERS}`}
        />
        <Tab
          icon={RoleIcon}
          title="Roles"
          path={`${ADMIN_ROLES}`}
        />
      </div>
    </aside>
  );
}
