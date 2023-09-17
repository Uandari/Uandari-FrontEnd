import CellBoard from './CellBoard';

function HeadBoard() {
  return (
    <div className="grid grid-cols-2 border-b  border-main_color h-full">
      <CellBoard title="Usuario"  />
      <CellBoard title="Número de control"  />
    </div>
  );
}

export default HeadBoard;
