import CellBoard from './CellBoard';
import CellTab from './CellTab';

function HeadBoard() {
  return (
    <div>
      <CellTab shift="Matutino" />
      <div className="grid grid-cols-11 border-b border-main_color h-full">
        <CellBoard title="Hora" />
        <CellBoard title="Operación" />
        <CellBoard title="Tiempo de paro" />
        <CellBoard title="Es" />
        <CellBoard title="Debe" />
        <CellBoard title="Es acumulado" />
        <CellBoard title="Debe acumulado" />
        <CellBoard title="Diferencia" />
        <CellBoard title="Diferencia Acumulada" />
        <CellBoard title="Problema" colSpan="col-span-2" />
      </div>
    </div>
  );
}

export default HeadBoard;
