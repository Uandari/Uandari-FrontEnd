import CellBoard from './CellBoard';
import CellTab from './CellTab';

function HeadBoard() {
  return (
    <div>
      <CellTab shift="Matutino" />
      <div className="grid grid-cols-9 border-b border-main_color h-full">
        <CellBoard title="Hora" />
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
