import Topbar from '@components/layout/topbar';
import Table from './Table';

function RolesList() {
  return (
    <div className="border grid bg-white w-full h-screen">
      <div className="sticky top-0">
        <Topbar title='Gestión de roles' variant='secondary'/>
      </div>
        <div className="row-span-5">
          <Table />
        </div>
    </div>
  );
}

export default RolesList;

