import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import {
  DASHBOARD_MAIN,
  DASHBOARD_USERS,
} from '@routes/paths';

import Tab from './tab';

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-full text-left w-64 p-2 gap-1 bg-primary drop-shadow-xl">
      <Tab
        icon={<ManageAccountsOutlinedIcon />}
        title="Usuarios"
        path={`${DASHBOARD_MAIN}${DASHBOARD_USERS}`}
      />
    </aside>
  );
}
