import Sidebar from '@components/layout/sidebar';
import SidebarTab from '@components/layout/sidebar/sidebarTab';
import { Outlet } from 'react-router-dom';
import GoalsIcon from '@icons/crosshair.svg';
import PointsPlanIcon from '@icons/PointsPlanIcon.svg';
import { CRITICAL_PATH } from '@routes/paths';
import SidebarTitle from '@components/layout/sidebar/sidebarTitle';

export default function UploadPanel() {
  return (
    <main className="flex flex-col min-w-full min-h-full h-full">
      <div className="flex flex-row h-full max-h-full">
        <Sidebar userSubtitle='Administrador' userTitle='Andrés Cordero Ramírez'>
          <SidebarTitle sidebarTitle='Nivel 1' />

          <SidebarTab icon={GoalsIcon} title="Ruta Crítica" path={`${CRITICAL_PATH}`} />
          <SidebarTab
            icon={PointsPlanIcon}
            title="Plan de Puntos"
            path={`${CRITICAL_PATH}`}
          />

        </Sidebar>
        <Outlet />
      </div>
    </main>
  );
}
