import Topbar from '@components/layout/topbar';
import { graphShifts } from '@mocks/GraphShift';
import { mainThreeProblems } from '@mocks/MainThreeIssues';
import { DatePickerProps } from 'antd';

import Graph from './Graph';
import CardStatistics from '../problem-list/modules/CardStatistics';

function IssuesEvolution() {
  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Evolución de problemas" variant="secondary" />
      <div className="flex flex-col flex-1 overflow-y-auto bg-main_white border-t border-main_color">
        <div className="grid grid-cols-3 gap-x-4 p-4 w-full">
          {mainThreeProblems.map((card) => (
            <CardStatistics
              title={card.name}
              quantity={card.quantity}
              description="incidencias"
              percentage={card.percentage}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-6 pb-7">
          <Graph data={graphShifts} name="Averías o fallas en equipos" />
          <Graph data={graphShifts} name="Desecho y retrabajo" />
          <Graph data={graphShifts} name="Organizativas" />
        </div>
      </div>
    </div>
  );
}

export default IssuesEvolution;
