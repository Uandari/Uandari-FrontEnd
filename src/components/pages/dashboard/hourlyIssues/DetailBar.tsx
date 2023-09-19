import GoalsIcon from '@icons/crosshair.svg';
import CollapsedIcon from '@icons/open-close-icon.svg';
import ScrewIcon from '@icons/screw.svg';

import CardTab from './modules/detail-components/CardTab';
import LabelTab from './modules/detail-components/LabelTab';

export type DetailBarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

function DetailBar({ collapsed, setCollapsed }: DetailBarProps) {
  return (
    <div className="h-screen pt-6 border-r relative overflow-hidden border-main_color overflow-y-auto  bg-white hide-scrollbar">
      {collapsed && (
        <div className="absolute z-[2] top-0 left-0 w-full h-full bg-white border" />
      )}
      <div className="flex justify-between items-center w-full px-3 relative">
        <div>
          <h4 className="text-main_title_color font-medium text-2xl">Hoy</h4>
          <div className="flex items-center gap-1">
            <img src={GoalsIcon} alt="goal-icon" />
            <p className="text-main_text_color">800 motores</p>
          </div>
        </div>
        <button
          className={`${collapsed ? 'absolute left-0 z-30' : ''}`}
          onClick={() => setCollapsed(!collapsed)}
          type="button"
        >
          <img
            src={CollapsedIcon}
            className={`w-10 transition-all duration-300 ${
              collapsed ? 'rotate-180' : ''
            }`}
            alt="settings-icon"
          />
        </button>
      </div>
      <div className="flex flex-col gap-y-4 mt-8 border-t pt-2 border-main_color">
        <LabelTab
          icon={ScrewIcon}
          title="Averías o fallas de equipo"
          quantity="3"
        />
        <LabelTab
          icon={ScrewIcon}
          title="Cambios o ajustes de herramientas o modelo (Piezas)"
          quantity="3"
        />
        <LabelTab
          icon={ScrewIcon}
          title="Cambio de herramientas o modelo (Piezas)"
          quantity="3"
        />
        <LabelTab
          icon={ScrewIcon}
          title="Paros planeados (Mantenimiento)"
          quantity="3"
        />
      </div>
      <CardTab
        status="En proceso"
        problem="Averías o fallas en equipos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
      />
      <CardTab
        status="En proceso"
        problem="Averías o fallas en equipos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
      />
      <CardTab
        status="En proceso"
        problem="Averías o fallas en equipos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
      />
    </div>
  );
}

export default DetailBar;
