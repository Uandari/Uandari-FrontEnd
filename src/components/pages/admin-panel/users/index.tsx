import Topbar from '@components/layout/topbar';

import CustomTabs from './modules/Tabs';

export default function UsersList() {
  return (
    <div className="border border-b grid bg-white flex-1 h-screen">
      <div className="sticky top-0">
        <Topbar title="Gestión de usuarios" areTabsBelow />
        <CustomTabs />
      </div>
    </div>
  );
}
