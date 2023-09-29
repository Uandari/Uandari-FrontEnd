/* eslint-disable no-nested-ternary */
import { monthGoals } from '@mocks/MonthGoals';
import { weeks } from '@mocks/StaffRotation';
import { years } from '@mocks/Years';
import { Select, Tooltip } from 'antd';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
  ComposedChart,
  Line,
  LineChart,
} from 'recharts';

type GraphProps = {
  filterDay?: boolean;
  filterWeek?: boolean;
  filterMonth?: boolean;
  filterYear?: boolean;
  graph: 'PieChart' | 'BarChart1' | 'BarChart2' | 'BarChart3' | 'LineChart';
  title: string;
  data: {
    name?: string;
    value?: number;
    Motores_No_Producidos?: number;
    Motores_Producidos?: number;
    Es?: number;
    Debe?: number;
    Turno_1?: number;
    Turno_2?: number;
    Turno_3?: number;
  }[];
};

function Graph({
  title,
  data,
  graph,
  filterDay,
  filterWeek,
  filterMonth,
  filterYear,
}: GraphProps) {

  const COLORS = ['#F765A3', '#A155B9', '#16BFD6', '#165BAA'];
  const monthNames = monthGoals.map((goal) => goal.name);
  return (
    <div >
      <p className="text-lg mb-3 font-semibold">{title} </p>
      {filterDay ? (
        <Select placeholder="Filtrar por día" className='mx-2'>
          {weeks.map((week) => (
            <div>
              {week.days.map((day) => (
                <Select.Option key={day.date} value={day.date}>
                  {day.date}
                </Select.Option>
              ))}
            </div>
          ))}
        </Select>
      ) : null}
      {filterWeek ? (
        <Select placeholder="Filtrar por semana" className='mx-2'>
          {weeks.map((week) => (
            <Select.Option key={week.value} value={week.value}>
              {week.value}
            </Select.Option>
          ))}
        </Select>
      ) : null}
      {filterMonth ? (
        <Select placeholder="Filtrar por mes" className='mx-2'>
          {monthNames.map((name) => (
            <Select.Option key={name} value={name}>
              {name}
            </Select.Option>
          ))}
        </Select>
      ) : null}
      {filterYear ? (
        <Select placeholder="Filtrar por año" options={years} className='mx-2' />
      ) : null}
      <div className='justify-center items-center pt-8 pb-16 '>
        {graph === 'BarChart1' ? (
          <div className='grid grid-rows-6'>
            <div className='mb-6'>
              <p className='font-semibold text-main_gray'>Motores No Producidos</p>
              <p className='font-semibold text-main_blue_dark text-5xl '>5.987,34</p>
              <p className='text-sm col-span-2'>Motores</p>
            </div>
            <div className='row-span-5 max-h-[1200px]'>
              <ResponsiveContainer height='100%' width='100%'>
                <ComposedChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Es" barSize={100} fill={COLORS[3]} />
                  <Line dataKey="Debe" stroke={COLORS[1]} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : graph === 'BarChart2' ? (
          <div className='grid grid-rows-6'>
            <div className='mb-6'>
              <p className='font-semibold text-main_gray'>Motores No Producidos</p>
              <p className='font-semibold text-main_blue_dark text-5xl '>4,121</p>
              <p className='text-sm col-span-2'>Motores</p>
            </div>
            <div className='row-span-5 max-h-[1200px]'>
              <ResponsiveContainer height='100%' width='100%'>
                <BarChart data={data}>
                <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Legend />
                  <Bar dataKey="Motores_No_Producidos" stackId="a" fill={COLORS[3]} />
                  <Bar dataKey="Motores_Producidos" stackId="a" fill={COLORS[1]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : graph === 'BarChart3' ? (
          <div>BarChart3</div>
        ) : graph === 'PieChart' ? (
          <div className='grid grid-cols-2'>
            <div >
              <ResponsiveContainer height={500}>
                <PieChart >
                  <Pie
                    data={data}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>

                </PieChart>

              </ResponsiveContainer>
              <div className='grid grid-cols-3 text-sm'>
                {data.map((item, index) => (
                  <div key={index} className='grid grid-cols-2 '>
                    <div
                      className='h-3 w-6 justify-self-end p-2'
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <p className='justify-self-start px-4'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='grid grid-rows-2 '>
              <div className='grid grid-cols-3  grid-rows-3 h-fit items-center'>
                <p className='font-semibold text-main_gray'>Motores Producidos</p>
                <p className='font-semibold text-main_gray col-span-2'>Motores No Producidos</p>
                <p className='font-semibold text-main_blue_dark text-5xl'>5.987,34</p>
                <p className='font-semibold text-main_blue_dark text-5xl col-span-2 '>4122</p>
                <p className='text-sm '>Motores</p>
                <p className='text-sm col-span-2'>Motores</p>
              </div>
              <div className='grid grid-cols-2 grid-rows-2 h-fit center items-end'>
                <div className='text-lg font-semibold col-span-2 '>Listado de Problemas</div>
                <p className='text-main_text_color'>Disponibilidad</p>
                <p className='text-main_text_color' >5162</p>
                <p className='text-main_text_color'>Calidad</p>
                <p className='text-main_text_color'>1254</p>
                <p className='text-main_text_color'>Desempeño</p>
                <p className='text-main_text_color'>3521</p>
              </div>
            </div>
          </div>
        ) : graph === 'LineChart' ? (
          <div className='grid grid-cols-9'>
            <div className='row-span-5 max-h-[1200px] col-span-8'>
              <ResponsiveContainer height='100%' width='100%'>
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                   <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line dataKey="Turno_1" strokeWidth={3} stroke={COLORS[0]}   activeDot={{ r: 8 }} />
                  <Line dataKey="Turno_2"  strokeWidth={3} stroke={COLORS[1]} activeDot={{ r: 8 }} />
                  <Line dataKey="Turno_3" strokeWidth={3} stroke={COLORS[3]}  activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className='grid grid-rows-4 pl-6 gap-4'>
              <div>
                <p className='font-semibold'>Meta</p>
                <p>255</p>
              </div>
              <div>
                <p className='font-semibold'>Promedio turno 1</p>
                <p>255</p>
              </div>
              <div>
                <p className='font-semibold'>Promedio turno 2</p>
                <p>255</p>
              </div>
              <div>
                <p className='font-semibold'>Promedio turno 3</p>
                <p>255</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div >
  );
}

export default Graph;

Graph.defaultProps = {
  filterDay: false,
  filterWeek: false,
  filterMonth: false,
  filterYear: false,
};


