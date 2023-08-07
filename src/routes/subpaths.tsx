import { TabProps } from '@components/layout/sidebar/tab';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import DevicesIcon from '@mui/icons-material/DevicesOther';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RoomIcon from '@mui/icons-material/Room';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

import {
  DASHBOARD_FAMILIES,
  DASHBOARD_MAIN,
  DASHBOARD_PRODUCTS,
  DASHBOARD_ROUTES,
  DASHBOARD_TRUCKS,
  DASHBOARD_DEVICES,
} from './paths';

export const catalogs: TabProps[] = [
  {
    icon: <DashboardOutlined />,
    title: 'Productos',
    path: `${DASHBOARD_MAIN}${DASHBOARD_PRODUCTS}`,
  },
  {
    icon: <WorkspacesIcon />,
    title: 'Familias',
    path: `${DASHBOARD_MAIN}${DASHBOARD_FAMILIES}`,
  },
  {
    icon: <RoomIcon />,
    title: 'Rutas',
    path: `${DASHBOARD_MAIN}${DASHBOARD_ROUTES}`,
  },
  {
    icon: <LocalShippingIcon />,
    title: 'Camiones',
    path: `${DASHBOARD_MAIN}${DASHBOARD_TRUCKS}`,
  },
  {
    icon: <DevicesIcon />,
    title: 'Dispositivos',
    path: `${DASHBOARD_MAIN}${DASHBOARD_DEVICES}`,
  },
];
