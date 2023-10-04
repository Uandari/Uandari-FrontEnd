import AdminPanel from '@components/pages/admin-panel';
import CellsList from '@components/pages/admin-panel/cells';
import UsersList from '@components/pages/admin-panel/users';
import Dashboard from '@components/pages/dashboard';
import AssistencePerShift from '@components/pages/dashboard/assistence-per-shift';
import Colaborators from '@components/pages/dashboard/colaborators';
import CriticalRoute from '@components/pages/dashboard/critical-route';
import EscalatedIssues from '@components/pages/dashboard/escalated-issues';
import FiveS from '@components/pages/dashboard/fiveS';
import Goals from '@components/pages/dashboard/goals';
import HourlyIssues from '@components/pages/dashboard/hourlyIssues';
import IssuesEvolution from '@components/pages/dashboard/issues-evolution';
import IssuesTracking from '@components/pages/dashboard/issues-tracking';
import PointsPlan from '@components/pages/dashboard/points-plan';
import IssuesList from '@components/pages/dashboard/problem-list';
import ResultsLog from '@components/pages/dashboard/results-log';
import SkillsMatrix from '@components/pages/dashboard/skills-matrix';
import StaffRotation from '@components/pages/dashboard/staff-rotation';
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
  ADMIN,
  ADMIN_USERS,
  UPLOADS,
  CRITICAL_PATH,
  ISSUES_LIST,
  ESCALATED_ISSUES,
  ISSUES_TRACKING,
  COLLABORATORS,
  TEAM_GOALS,
  ADMIN_CELLS,
  GOALS,
  STANDARD_WORKSHEETS,
  ASSISTENCE_PER_SHIFT,
  ISSUES_EVOLUTION,
  PAGE_5S,
  SKILLS_MATRIX,
  POINTS_PLAN,
  STAFF_ROTATION,
  RESULTS_LOG,
} from './paths';
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
      {
        path: ISSUES_EVOLUTION,
        element: <IssuesEvolution />,
      },
      {
        path: PAGE_5S,
        element: <FiveS />,
      },
      {
        path: CRITICAL_PATH,
        element: <CriticalRoute />,
      },
      {
        path: SKILLS_MATRIX,
        element: <SkillsMatrix />,
      },
      {
        path: POINTS_PLAN,
        element: <PointsPlan />,
      },
      {
        path: STAFF_ROTATION,
        element: <StaffRotation />,
      },
      {
        path: RESULTS_LOG,
        element: <ResultsLog />,
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
