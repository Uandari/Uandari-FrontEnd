import PlusIcon from '@assets/plus.svg';

export type RowBoardProps = {
  hour: string;
};

function RowBoard({ hour }: RowBoardProps) {
  const json = {
    id: '10',
    horaInicio: '06:00',
    horaFin: '07:00',
    fecha: 'DATE',
    debeAcumulado: '0',
    es: '0',
    esAcumulado: '0',
    diferencia: '0',
    diferenciaAcumulada: '0',
    perdidaTotalDesempeño: '0',
    perdidaTotalCalidad: '0',
    perdidaTotalDisponibilidad: '0',
  };
  return (
    <div className="grid grid-cols-8 border-b border-main_color h-24 ">
      {/* Hora */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {hour}
      </div>
      {/* Es */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color ">
        <input
          className="w-full h-full border-none text-center outline-none text-lg cursor-pointer"
          type="number"
        />
      </div>
      {/* Debe */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color">
        <input
          className="w-full h-full border-none text-center outline-none text-lg cursor-pointer"
          type="number"
        />
      </div>
      {/* Debe acumulado */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        0
      </div>
      {/* Diferencia */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        0
      </div>
      {/* Diferencia acumulada */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        0
      </div>
      {/* Problema */}
      <div className="flex col-span-2 items-center justify-center">
        <button className="flex items-center gap-1" type="button">
          <img src={PlusIcon} alt="plus-icon" />
          <p className="text-main_gray text-sm">Nuevo problema</p>
        </button>
      </div>
    </div>
  );
}

export default RowBoard;
