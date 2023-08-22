import DownloadIcon from '@assets/icons/downloadIcon.svg';
import CalendarIcon from '@icons/calender.svg';
import {
  Bar,
  BarChart,
  CartesianAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function Pareto() {
  const data = [
    {
      name: 'Problema 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Problema 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Problema 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Problema 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Problema 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <div className="flex flex-col h-full flex-1">
      <div className="w-full flex justify-end pr-8">
        <button
          onClick={() => console.log('Download PDF')}
          type="button"
          className="flex items-center bg-main_blue_dark gap-x-2 text-main_white px-4 py-2 rounded-lg"
        >
          <img src={DownloadIcon} alt="download-icon" />
          Descargar reporte en PDF
        </button>
      </div>

      <div className="w-full grid grid-cols-2 px-8 mt-4 gap-x-6">
        <div>
          <div className="flex gap-x-2">
            <img src={CalendarIcon} alt="calendar-icon" />
            <p className="text-main_text_color text-xs">
              Semana 1, Julio de 2023
            </p>
          </div>
          <h2 className="text-main_title_color text-2xl font-medium">
            Pareto temas de Volumen / Disponibilidad
          </h2>
          <BarChart
            margin={{
              top: 50,
            }}
            width={500}
            height={300}
            data={data}
          >
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
          </BarChart>
          <div>
            <p className="font-medium text-main_text_color">Desempeño</p>
            <div className="flex justify-between items-center">
              <p>Cantidad de problemas a escalar</p>
              <p className="text-main_text_color font-medium text-xl">6</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Cantidad de problemas del mes anterior</p>
              <p className="text-main_text_color font-medium text-xl">32</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Porcentaje de problemas en comparación al mes anterior</p>
              <p className="text-main_text_color font-medium text-xl">+50%</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-x-2">
            <img src={CalendarIcon} alt="calendar-icon" />
            <p className="text-main_text_color text-xs">
              Semana 1, Julio de 2023
            </p>
          </div>
          <h2 className="text-main_title_color text-2xl font-medium">
            Pareto temas de Calidad
          </h2>
          <BarChart
            margin={{
              top: 50,
            }}
            width={500}
            height={300}
            data={data}
          >
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
          </BarChart>
          <div>
            <p className="font-medium text-main_text_color">Desempeño</p>
            <div className="flex justify-between items-center">
              <p>Cantidad de problemas a escalar</p>
              <p className="text-main_text_color font-medium text-xl">6</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Cantidad de problemas del mes anterior</p>
              <p className="text-main_text_color font-medium text-xl">32</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Porcentaje de problemas en comparación al mes anterior</p>
              <p className="text-main_text_color font-medium text-xl">+50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pareto;
