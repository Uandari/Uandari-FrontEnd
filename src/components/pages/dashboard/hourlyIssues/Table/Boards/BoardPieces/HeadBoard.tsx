import CellBoard from './CellBoard';

function HeadBoard() {
  return (
    <div className="grid grid-cols-8 border-b border-main_color h-full">
      <CellBoard title="Hora" />
      <CellBoard title="Es" />
      <CellBoard title="Debe" />
      <CellBoard title="Debe acumulado" />
      <CellBoard title="Diferencia" />
      <CellBoard title="Diferencia Acumulada" />
      <CellBoard title="Problema" colSpan="col-span-2" />
    </div>
  );
}

export default HeadBoard;
