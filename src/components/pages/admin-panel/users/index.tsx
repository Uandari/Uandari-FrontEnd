import AdminTopbar from '../adminTopbar';
import Table from './Table';

function UsersList() {
  return (
    <div className="flex flex-1 border">
      <div className="grid grid-rows-6 grid-cols-1 bg-white ">
        <div className="row-span-1">
        <AdminTopbar />
        </div>
        <div className="row-span-5">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default UsersList;
