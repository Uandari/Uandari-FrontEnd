import { useEffect } from 'react';

import Sidebar from '@components/layout/sidebar';
import { DASHBOARD_MAIN, HOURLY_ISSUES } from '@routes/paths';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function AdminPanel() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main className="flex flex-col min-w-full min-h-full h-full">
      <div className="flex flex-row h-full max-h-full">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}
