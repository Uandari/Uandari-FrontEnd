import Sidebar from '@components/layout/sidebar';
import SidebarTab from '@components/layout/sidebar/sidebarTab';
import { Outlet } from 'react-router-dom';
import GoalsIcon from '@icons/crosshair.svg';
import PointsPlanIcon from '@icons/PointsPlanIcon.svg';
import { CRITICAL_PATH } from '@routes/paths';
import SidebarTitle from '@components/layout/sidebar/sidebarTitle';
import { boardPerAreas } from '@commons/enums';


export default function UploadPanel() {

  const selectedArea = 'ÁREA DE INGENIERÍA INDUSTRIAL';

  const selectedAreaData = boardPerAreas.find(areaData => areaData.area === selectedArea);

  if (!selectedAreaData) {
    return <p>Área no encontrada</p>;
  }

  return (
    <main className="flex flex-col min-w-full min-h-full h-full">
      <div className="flex flex-row h-full max-h-full">
        <Sidebar userSubtitle='Administrador' userTitle='Andrés Cordero Ramírez'>
          {selectedAreaData.level1 && (
            <SidebarTitle sidebarTitle='Nivel 1' />
          )}

          {selectedAreaData.tableros
            .filter(tablero => tablero.level === "Level 1")
            .map((tablero, index) => (
              <SidebarTab
                key={index}
                icon={tablero.icono}
                title={tablero.titulo}
                path={tablero.path}
              />
            ))}

          {selectedAreaData.level2 && (
            <SidebarTitle sidebarTitle='Nivel 2' />
            )}
            {selectedAreaData.tableros
              .filter(tablero => tablero.level === "Level 2")
              .map((tablero, index) => (
                <SidebarTab
                  key={index}
                  icon={tablero.icono}
                  title={tablero.titulo}
                  path={tablero.path}
                />
              ))}

        </Sidebar>
        <Outlet />
      </div>
    </main>
  );
}
