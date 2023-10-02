import Topbar from '@components/layout/topbar';

import Graph from './modules/Graph';

const dataMockPieChart = [
  { name: 'Disponibilidad', value: getRandomValue(1000, 5000) },
  { name: 'Desempeño', value: getRandomValue(1000, 5000) },
  { name: 'Calidad', value: getRandomValue(1000, 5000) },
];
const dataMockBarChart1 = [
  { hora: '6:00 - 7:00', Es: getRandomValue(1000, 5000), Debe: getRandomValue(1000, 5000) },
  { name: '7:00 - 8:00', Es: getRandomValue(1000, 5000), Debe: getRandomValue(1000, 5000) },
  { name: '8:00 - 9:00', Es: getRandomValue(1000, 5000), Debe: getRandomValue(1000, 5000) },
  { name: '9:00 - 10:00', Es: getRandomValue(1000, 5000), Debe: getRandomValue(1000, 5000) },
  { name: '10:00 - 11:00', Es: getRandomValue(1000, 5000), Debe: getRandomValue(1000, 5000) },
  { name: '11:00 - 12:00', Es: getRandomValue(1000, 5000), Debe: getRandomValue(1000, 5000) },
  { name: '12:00 - 13:00', Es: getRandomValue(1000, 5000), Debe: getRandomValue(1000, 5000) },
  { name: '13:00 - 14:00', Es: getRandomValue(1000, 5000), Debe: getRandomValue(1000, 5000) },
];
const dataMockBarChart2 = [
  { name: 'Disponibilidad', Motores_No_Producidos: getRandomValue(1000, 5000), Motores_Producidos: getRandomValue(1000, 5000) },
  { name: 'Desempeño', Motores_No_Producidos: getRandomValue(1000, 5000), Motores_Producidos: getRandomValue(1000, 5000) },
  { name: 'Calidad', Motores_No_Producidos: getRandomValue(1000, 5000), Motores_Producidos: getRandomValue(1000, 5000) },
];
const dataMockLineChart = [
  { name: 'Enero', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Febrero', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Marzo', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Abril', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Mayo', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Junio', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Julio', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Agosto', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Septiembre', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Octubre', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Noviembre', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
  { name: 'Diciembre', Turno_1: getRandomValue(1000, 5000), Turno_2: getRandomValue(2000, 6000), Turno_3: getRandomValue(3000, 7000) },
];

function getRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function ResultsLog() {
  return (
    <div className="flex flex-1 flex-col p-">
      <Topbar title="Registro de resultados" underline/>
      <div className="flex flex-col flex-1 overflow-y-auto px-9 py-3 bg-main_white">
        <div className="p-4 flex justify-end">
          <button
            className="bg-main_blue_dark py-2 rounded-lg px-6 text-white"
            type="button"
          >
            Descargar reporte
          </button>
        </div>
        <div className=" px-4 mb-3  pb-7">
          <Graph
            graph="PieChart"
            data={dataMockPieChart}
            filterDay
            filterWeek
            filterMonth
            filterYear
            title="Pérdidas generales"
          />
          <Graph
            graph="BarChart1"
            data={dataMockBarChart1}
            filterDay
            filterYear
            title="Desglose de Pérdidas"
          />
          <Graph
            graph="BarChart2"
            data={dataMockBarChart2}
            filterDay
            filterWeek
            filterMonth
            filterYear
            title="Desglose de Pérdidas"
          />
          <Graph
            graph="BarChart1"
            data={dataMockBarChart1}
            filterWeek
            filterMonth
            filterYear
            title="OEE"
          />
          <Graph
            graph="LineChart"
            data={dataMockLineChart}
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
