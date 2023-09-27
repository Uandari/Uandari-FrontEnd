import Topbar from '@components/layout/topbar';
import Graph from '../issues-evolution/Graph';
import { graphShifts } from '@mocks/GraphShift';

export default function ResultsLog() {
  return (
    <div className="flex flex-1 flex-col">
      <Topbar variant="primary" title="Registro de resultados"/>
      <div className="flex flex-col flex-1 overflow-y-auto bg-main_white border-t border-main_color">
        <div className="grid grid-cols-3 gap-x-4 p-4 w-full">
          afasf
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
