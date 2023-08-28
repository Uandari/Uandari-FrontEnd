import AdminPanel from '@components/pages/admin-panel';
import RolesList from '@components/pages/admin-panel/roles';
import UsersList from '@components/pages/admin-panel/users';
import Dashboard from '@components/pages/dashboard';
import EscalatedIssues from '@components/pages/dashboard/escalated-issues';
import HourlyIssues from '@components/pages/dashboard/hourlyIssues';
import IssuesTracking from '@components/pages/dashboard/issues-tracking';
import IssuesList from '@components/pages/dashboard/problem-list';
import LoginPage from '@components/pages/login';
import NotFound from '@components/pages/not-found';
import UploadPanel from '@components/pages/upload-panel';
import CriticalPathUpload from '@components/pages/upload-panel/critical-path';
import { createBrowserRouter } from 'react-router-dom';

import {
  LOGIN,
  DASHBOARD_MAIN,
  HOURLY_ISSUES,
  ADMIN,
  ADMIN_USERS,
  ADMIN_ROLES,
  UPLOADS,
  CRITICAL_PATH,
  ISSUES_LIST,
  ESCALATED_ISSUES,
  ISSUES_TRACKING,
  COLLABORATORS,
} from './paths';
import Colaborators from '@components/pages/dashboard/colaborators';
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
      {
        path: ISSUES_LIST,
        element: <IssuesList />,
      },
      {
        path: ISSUES_TRACKING,
        element: <IssuesTracking />,
      },
      {
        path: COLLABORATORS,
        element: <Colaborators />,
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
