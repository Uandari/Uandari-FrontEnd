import CellBoard from './CellBoard';

function HeadBoard() {
  return (
    <div className="grid grid-cols-8 border-b border-main_color h-full">
      <CellBoard title="Colaborador" colSpan="col-span-2" />
      <CellBoard title="Número de control" />
      <CellBoard title="Motor" />
      <CellBoard title="Línea" />
      <CellBoard title="Célula" />
      <CellBoard title="Operación" />
      <CellBoard title="Turno" />
    </div>
  );
}

export default HeadBoard;
