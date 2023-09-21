import CellBoard from './CellBoard';

function HeadBoard() {
  return (
    <div className="grid grid-cols-8 h-[64px] border-b">
      <CellBoard title="" />
      <CellBoard title="Célula" />
      <CellBoard title="Operación" />
      <CellBoard title="Descripción de la desviación" />
      <CellBoard title="Acción" />
      <CellBoard title="Responsable" />
      <CellBoard title="Plazo" />
      <CellBoard title="Estado" />
    </div>
  );
}

export default HeadBoard;
