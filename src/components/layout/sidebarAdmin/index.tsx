import IconUser from '@icons/iconUser.svg';
import { DASHBOARD_USERS, DASHBOARD_MAIN } from '@routes/paths';
import UserImg from '@usersIcons/UserImg.png';

import Tab from './tab';

export default function Sidebar() {
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
          title="Listado de problemas"
          path={`${DASHBOARD_MAIN}${DASHBOARD_USERS}`}
        />
      </div>
    </aside>
  );
}
