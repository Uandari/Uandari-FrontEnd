import Dashboard from '@components/pages/dashboard';
//import HourlyIssues from '@components/pages/dashboard/hourlyIssues';
import LoginPage from '@components/pages/login';
import NotFound from '@components/pages/not-found';
import { createBrowserRouter } from 'react-router-dom';

import {
  LOGIN,
  DASHBOARD_MAIN,
  DASHBOARD_HOURLY_ISSUES,
  DASHBOARD_GOALS,
  DASHBOARD_COLLABORATORS,
  DASHBOARD_ISSUE_TRACKING,
  DASHBOARD_RESULTS_LOG,
  DASHBOARD_LIST_OF_ISSUES,
  DASHBOARD_PARETO_CHART,
  DASHBOARD_ESCALATED_ISSUES,
  DASHBOARD_PROBLEM_EVOLUTION,
  DASHBOARD_STAFF_ROTATION,
  DASHBOARD_TEAM_GOALS,
  DASHBOARD_SKILLS_MATRIX,
  DASHBOARD_CRITICAL_PATH,
  DASHBOARD_5S,
  DASHBOARD_POINTS_PLAN,
  DASHBOARD_STANDARD_WORK_SHEET,
  DASHBOARD_USERS,
  UPLOAD_CRITICAL_PATH,
  UPLOAD_POINT_PLAN,
  UPLOAD_STIBA,
  UPLOAD_ERGONOMICS,
  UPLOAD_AVAILABILITY_REPORT,
  UPLOAD_CRITICAL_PATH_PERFORMANCE,
  UPLOAD_OEE,
  UPLOAD_PPM_FAILURES,
  UPLOAD_MOTOR_AUDIT,
  UPLOAD_QRK_EVALUATION,
  UPLOAD_DIMENSIONAL_EVALUATION,
  UPLOAD_LB_7A_PC7_FAILURES,
  UPLOAD_IMPURITIES,
  UPLOAD_SCRAP,
  UPLOAD_MAINTENANCE_COSTS,
  UPLOAD_TOOLS,
  UPLOAD_VBZ
} from './paths';
import PrivateRoute from './privateRoute';

const router = createBrowserRouter([
  {
    path: DASHBOARD_MAIN,
    element: <PrivateRoute element={<Dashboard />} />,
    children: [
      {
        path: DASHBOARD_HOURLY_ISSUES,
        //element: <HourlyIssues />,
      }
    ],
    errorElement: <NotFound />,
  },
  {
    path: LOGIN,
    element: <LoginPage />,
  },
]);

export default router;
