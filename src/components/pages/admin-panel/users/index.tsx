import Topbar from '@components/layout/topbar';

import CustomTabs from './modules/Tabs';

function UsersList() {
  return (
    <div className="border border-b grid bg-white w-full h-screen">
      <div className="sticky top-0">
        <Topbar title="Gestión de usuarios" variant="secondary" />
        <CustomTabs />
      </div>
    </div>
  );
}

export default UsersList;
