import GoalsIcon from '@icons/crosshair.svg';
import PointsPlanIcon from '@icons/PointsPlanIcon.svg';
import { CRITICAL_PATH } from '@routes/paths';

import Tab from './tab';

export default function SidebarUpload() {
  return (
    <aside className="border border-main_color bg-main_color flex flex-col h-screen text-left w-[360px] px-4 py-6 gap-1 bg-primary overflow-y-auto hide-scrollbar">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div>
            <h4 className="text-main_title_color font-medium">
              Ingeniería Industrial
            </h4>
            <p className="text-main_text_color text-xs ">Área administrativa</p>
          </div>
        </div>

        <h4 className="text-main_gray mt-4 mb-2 text-sm">Nivel 1</h4>

        <Tab icon={GoalsIcon} title="Ruta Crítica" path={`${CRITICAL_PATH}`} />
        <Tab
          icon={PointsPlanIcon}
          title="Plan de Puntos"
          path={`${CRITICAL_PATH}`}
        />

        <h4 className="text-main_gray mt-4 mb-2 text-sm">Nivel 2</h4>

        <Tab icon={GoalsIcon} title="Ergonomía" path={`${CRITICAL_PATH}`} />
        <Tab
          icon={GoalsIcon}
          title="Desempeño ruta crítica"
          path={`${CRITICAL_PATH}`}
        />
        <Tab icon={GoalsIcon} title="OEE" path={`${CRITICAL_PATH}`} />
        <Tab icon={GoalsIcon} title="SCRAP" path={`${CRITICAL_PATH}`} />
        <Tab
          icon={GoalsIcon}
          title="Costos de Mantenimiento"
          path={`${CRITICAL_PATH}`}
        />
        <Tab icon={GoalsIcon} title="Herramientas" path={`${CRITICAL_PATH}`} />
        <Tab icon={GoalsIcon} title="VBZ" path={`${CRITICAL_PATH}`} />
      </div>
    </aside>
  );
}
