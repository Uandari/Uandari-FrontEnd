import GoalsCard from './modules/GoalsCard';
import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';

export default function Board() {
  // Arreglo de horas a representar
  const months = [
    { month: 'ENERO', days: 31 },
    { month: 'FEBRERO', days: 28 },
    { month: 'MARZO', days: 31 },
    { month: 'ABRIL', days: 30 },
    { month: 'MAYO', days: 31 },
    { month: 'JUNIO', days: 30 },
    { month: 'JULIO', days: 31 },
    { month: 'AGOSTO', days: 31 },
    { month: 'SEPTIEMBRE', days: 30 },
    { month: 'OCTUBRE', days: 31 },
    { month: 'NOVIEMBRE', days: 30 },
    { month: 'DICIEMBRE', days: 31 },
  ];

  return (
    <div className="h-full grid grid-rows-[7]">
      <div className="h-auto w-full grid grid-cols-5 gap-x-6 p-5">
        
      <GoalsCard title='Seguridad' ></GoalsCard>
      <GoalsCard title='Volumen de producción programada'></GoalsCard>
      <GoalsCard title='Fallas B' ></GoalsCard>
      <GoalsCard title='Fallas C1'></GoalsCard>
      <GoalsCard title='Material Dañado'></GoalsCard>
        </div>
        <div className="row-span-1 border-t border-main_color">
      {months.map((monthInfo) => (
        <div>

          <HeadBoard days={monthInfo.days} />
          <RowBoard days={monthInfo.days} month={monthInfo.month}></RowBoard>
        </div>
          ))}
          </div>
    </div>
  );
}
