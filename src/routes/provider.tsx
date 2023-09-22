import AdminPanel from '@components/pages/admin-panel';
import CellsList from '@components/pages/admin-panel/cells';
import UsersList from '@components/pages/admin-panel/users';
import Dashboard from '@components/pages/dashboard';
import Colaborators from '@components/pages/dashboard/colaborators';
import EscalatedIssues from '@components/pages/dashboard/escalated-issues';
import Goals from '@components/pages/dashboard/goals';
import HourlyIssues from '@components/pages/dashboard/hourlyIssues';
import IssuesTracking from '@components/pages/dashboard/issues-tracking';
import IssuesList from '@components/pages/dashboard/problem-list';
import StandardWorksheet from '@components/pages/dashboard/standard-worksheet';
import TeamGoals from '@components/pages/dashboard/team-goals';
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
  UPLOADS,
  CRITICAL_PATH,
  ISSUES_LIST,
  ESCALATED_ISSUES,
  ISSUES_TRACKING,
  COLLABORATORS,
  TEAM_GOALS,
  ADMIN_LINES,
  ADMIN_CELLS,
  GOALS,
  STANDARD_WORKSHEETS,
  ASSISTENCE_PER_SHIFT,
} from './paths';
import AssistencePerShift from '@components/pages/dashboard/assistence-per-shift';
// import PrivateRoute from './privateRoute';

const router = createBrowserRouter([
  {
    path: DASHBOARD_MAIN,
    // element: <PrivateRoute element={<Dashboard />} />,
    element: <Dashboard />,
    children: [
      {
        path: '/',
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
      {
        path: TEAM_GOALS,
        element: <TeamGoals />,
      },
      {
        path: GOALS,
        element: <Goals />,
      },
      {
        path: STANDARD_WORKSHEETS,
        element: <StandardWorksheet />,
      },
      {
        path: ASSISTENCE_PER_SHIFT,
        element: <AssistencePerShift />,
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
        path: ADMIN_CELLS,
        element: <CellsList />,
      },
      /* {
        path: ADMIN_LINES,
        element: <LinesList />,
      }, */
      /* {
        path: ADMIN_ROLES,
        element: <RolesList />,
      }, */
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
