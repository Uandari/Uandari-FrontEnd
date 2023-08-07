import { useEffect } from 'react';

import Sidebar from '@components/layout/sidebar';
import TopBar from '@components/layout/topbar';
import { DASHBOARD_MAIN, DASHBOARD_HOURLY_ISSUES } from '@routes/paths';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem('jwtToken') && location.pathname === '/') {
      navigate(`${DASHBOARD_MAIN}${DASHBOARD_HOURLY_ISSUES}`);
    }
  }, [location.pathname, navigate]);

  return (
    <main className="flex flex-col min-w-full min-h-full h-full">
      <TopBar />
      <div className="flex flex-row h-full max-h-full">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}
