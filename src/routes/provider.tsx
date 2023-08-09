import Dashboard from '@components/pages/dashboard';
// import HourlyIssues from '@components/pages/dashboard/hourlyIssues';
import LoginPage from '@components/pages/login';
import NotFound from '@components/pages/not-found';
import { createBrowserRouter } from 'react-router-dom';

import { LOGIN, DASHBOARD_MAIN, HOURLY_ISSUES } from './paths';
import PrivateRoute from './privateRoute';

const router = createBrowserRouter([
  {
    path: DASHBOARD_MAIN,
    // element: <PrivateRoute element={<Dashboard />} />,
    element: <Dashboard />,
    children: [
      {
        path: HOURLY_ISSUES,
        // element: <HourlyIssues />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: LOGIN,
    element: <LoginPage />,
  },
]);

export default router;
