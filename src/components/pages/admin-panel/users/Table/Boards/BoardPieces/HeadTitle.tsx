import CellBoard from './CellBoard';

function HeadTitle() {
  return (
    <div className="grid grid-cols-8  border-main_color h-full">
      <CellBoard title="Usuario" />
      <CellBoard title="Número de control" />
      <CellBoard title="Línea" />
      <CellBoard title="Célula" />
      <CellBoard title="Operación" />
      <CellBoard title="Turno" />
    </div>
  );
}

export default HeadTitle;
