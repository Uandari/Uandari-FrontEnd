import Sidebar from '@components/layout/sidebar';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <main className="flex flex-col min-w-full min-h-full h-full">
      <div className="flex flex-row h-full max-h-full">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}
