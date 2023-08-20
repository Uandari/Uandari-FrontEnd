import Topbar from '@components/layout/topbar';
import CustomTabs from '@components/layout/tabs';

function UsersList() {
  return (
    <div className="flex flex-1 border">
      <div className="grid grid-cols-1 bg-white w-full">
        <div className="">
        <Topbar title='Gestión de usuarios' variant='secondary'/>
        </div>
        <CustomTabs />
      </div>
    </div>
  );
}

export default UsersList;
