import GoalsIcon from '@icons/crosshair.svg';
import ScrewIcon from '@icons/screw.svg';
import SettingsIcon from '@icons/SettingIcon.svg';

import CardTab from './modules/detail-components/CardTab';
import LabelTab from './modules/detail-components/LabelTab';

function DetailBar() {
  return (
    <div className="w-full h-screen pt-6 border-r border-main_color overflow-y-auto bg-white hide-scrollbar">
      <div className="flex justify-between items-center w-full px-3 ">
        <div>
          <h4 className="text-main_title_color font-medium text-2xl">Hoy</h4>
          <div className="flex items-center gap-1">
            <img src={GoalsIcon} alt="goal-icon" />
            <p className="text-main_text_color">800 motores</p>
          </div>
        </div>
        <button type="button">
          <img src={SettingsIcon} alt="settings-icon" />
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
