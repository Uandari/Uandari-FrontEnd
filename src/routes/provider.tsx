import Dashboard from '@components/pages/dashboard';
import Devices from '@components/pages/dashboard/devices';
import Families from '@components/pages/dashboard/families';
import Historical from '@components/pages/dashboard/historical';
import Products from '@components/pages/dashboard/products';
import Trucks from '@components/pages/dashboard/trucks';
import Users from '@components/pages/dashboard/users';
import WorkLoad from '@components/pages/dashboard/work-load';
import WorkRoutes from '@components/pages/dashboard/work-routes';
import LoginPage from '@components/pages/login';
import NotFound from '@components/pages/not-found';
import { createBrowserRouter } from 'react-router-dom';

import {
  DASHBOARD_HISTORICAL,
  DASHBOARD_MAIN,
  DASHBOARD_PRODUCTS,
  DASHBOARD_ROUTES,
  DASHBOARD_USERS,
  DASHBOARD_WORK_LOAD,
  LOGIN,
  DASHBOARD_CATALOGS,
  DASHBOARD_FAMILIES,
  DASHBOARD_DEVICES,
  DASHBOARD_TRUCKS,
} from './paths';
import PrivateRoute from './privateRoute';

const router = createBrowserRouter([
  {
    path: DASHBOARD_MAIN,
    element: <PrivateRoute element={<Dashboard />} />,
    children: [
      {
        path: DASHBOARD_WORK_LOAD,
        element: <WorkLoad />,
      },
      {
        path: DASHBOARD_USERS,
        element: <Users />,
      },
      {
        path: DASHBOARD_CATALOGS,
        children: [
          {
            path: DASHBOARD_PRODUCTS,
            element: <Products />,
          },
          {
            path: DASHBOARD_FAMILIES,
            element: <Families />,
          },
          {
            path: DASHBOARD_ROUTES,
            element: <WorkRoutes />,
          },
          {
            path: DASHBOARD_TRUCKS,
            element: <Trucks />,
          },
          {
            path: DASHBOARD_DEVICES,
            element: <Devices />,
          },
        ],
      },
      {
        path: DASHBOARD_HISTORICAL,
        element: <Historical />,
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
