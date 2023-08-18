import ChartIcon from '@icons/analytics.svg';
import ScrewIcon from '@icons/screw.svg';

import CardTab from './CardTab';
import LabelTab from './LabelTab';

function AvailabilityTab() {
  return (
    <div>
      <div className="flex w-full items-center justify-between mb-4">
        <div className="flex gap-2 items-center">
          <img className="w-5" src={ChartIcon} alt="" />
          <p className="text-main_title_color font-medium">
            Total de problemas
          </p>
        </div>
        <p className="font-medium text-main_title_color text-lg">4</p>
      </div>

      <div className="flex flex-col gap-y-4">
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
        problem="Averías o fallas en equipos"
        status="Solucionado"
      />
      <CardTab
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
        problem="Averías o fallas en equipos"
        status="En proceso"
      />
      <CardTab
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
        problem="Averías o fallas en equipos"
        status="Escalado"
      />
    </div>
  );
}

export default AvailabilityTab;
