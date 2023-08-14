import Dashboard from '@components/pages/dashboard';
import EscalatedIssues from '@components/pages/dashboard/escalated-issues';
import HourlyIssues from '@components/pages/dashboard/hourlyIssues';
import LoginPage from '@components/pages/login';
import NotFound from '@components/pages/not-found';
import UploadPanel from '@components/pages/upload-panel';
import CriticalPathUpload from '@components/pages/upload-panel/critical-path';
import { createBrowserRouter } from 'react-router-dom';

import {
  LOGIN,
  DASHBOARD_MAIN,
  HOURLY_ISSUES, ADMIN, ADMIN_USERS, ADMIN_ROLES,
  UPLOADS,
  GOALS,
  ESCALATED_ISSUES,
  CRITICAL_PATH,
} from './paths';
import AdminPanel from '@components/pages/admin-panel';
import UsersList from '@components/pages/admin-panel/users';
import RolesList from '@components/pages/admin-panel/roles';
// import PrivateRoute from './privateRoute';

const router = createBrowserRouter([
  {
    path: DASHBOARD_MAIN,
    // element: <PrivateRoute element={<Dashboard />} />,
    element: <Dashboard />,
    children: [
      {
        path: HOURLY_ISSUES,
        element: <HourlyIssues />,
      },
      {
        path: ESCALATED_ISSUES,
        element: <EscalatedIssues />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: LOGIN,
    element: <LoginPage />,
  },
  {
    path: ADMIN,
    element: <AdminPanel />,
    children: [
      {
        path: ADMIN_USERS,
        element: <UsersList />,
      },
      {
        path: ADMIN_ROLES,
        element: <RolesList />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: UPLOADS,
    // element: <PrivateRoute element={<UploadPanel />} />,
    element: <UploadPanel />,
    children: [
      {
        path: CRITICAL_PATH,
        element: <CriticalPathUpload />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
