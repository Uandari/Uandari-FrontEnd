import Topbar from '@components/layout/topbar';
import Table from './Table';

function RolesList() {
  return (
    <div className="flex flex-1 border">
      <div className="grid grid-cols-1 bg-white w-full">
        <div className="">
        <Topbar title='Gestión de roles' variant='secondary'/>
        </div>
        <div className="row-span-5">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default RolesList;
