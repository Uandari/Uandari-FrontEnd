
import { Outlet } from 'react-router-dom';
import SidebarAdmin from '@components/layout/sidebarAdmin';

export default function AdminPanel() {

  return (
    <main className="flex flex-col min-w-full min-h-full h-full">
      <div className="flex flex-row h-full max-h-full">
        <SidebarAdmin />
        <Outlet />
      </div>
    </main>
  );
}
