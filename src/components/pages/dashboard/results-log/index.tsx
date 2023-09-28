import Topbar from '@components/layout/topbar';
import { graphShifts } from '@mocks/GraphShift';

import Graph from './modules/Graph';

export default function ResultsLog() {
  return (
    <div className="flex flex-1 flex-col">
      <Topbar variant="primary" title="Registro de resultados" />
      <div className="flex flex-col flex-1 overflow-y-auto bg-main_white border-t border-main_color">
        <div className="p-4 flex justify-end">
          <button
            className="bg-main_blue_dark py-2 rounded-lg px-6 text-white"
            type="button"
          >
            Descargar reporte
          </button>
        </div>

        <div className="flex flex-col gap-y-6 pb-7">
          <Graph
            graph="PieChart"
            data={graphShifts}
            filterDay
            filterWeek
            filterMonth
            filterYear
            title="Pérdidas generales"
          />
          <Graph
            graph="BarChart"
            data={graphShifts}
            filterDay
            filterYear
            title="Desglose de Pérdidas"
          />
          <Graph
            graph="BarChart"
            data={graphShifts}
            filterDay
            filterWeek
            filterMonth
            filterYear
            title="Desglose de Pérdidas"
          />
          <Graph
            graph="BarChart"
            data={graphShifts}
            filterWeek
            filterMonth
            filterYear
            title="OEE"
          />
          <Graph
            graph="LineChart"s
            data={graphShifts}
            filterWeek
            filterMonth
            filterYear
            title="Volúmen por tuno"
          />
        </div>
      </div>
    </div>
  );
}
