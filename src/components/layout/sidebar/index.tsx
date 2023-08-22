import { ReactNode } from 'react';

import OpenUserManual from '@components/basic/userManualButton';

type SidebarProps = {
  children: ReactNode;
  userTitle: string;
  userSubtitle: string;
  userImage?: string;
};

export default function Sidebar({
  children,
  userTitle,
  userSubtitle,
  userImage,
}: SidebarProps) {
  return (
    <aside className="border border-main_color bg-main_color flex flex-col h-screen text-left w-[360px] px-4 py-6 gap-1 bg-primary overflow-y-auto hide-scrollbar">
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-6">
          {userImage && (
            <img className="w-10 h-10" src={userImage} alt="user_image" />
          )}
          <div>
            <h4 className="text-main_title_color font-medium">{userTitle}</h4>
            <p className="text-main_text_color text-xs ">{userSubtitle}</p>
          </div>
        </div>
        {children}
      </div>
      <div className="mt-1">
        <OpenUserManual />
      </div>
    </aside>
  );
}

Sidebar.defaultProps = {
  userImage: undefined,
};
