import CellBoard from './CellBoard';

function HeadBoard() {
  return (
    <div className="grid grid-cols-2 border-b border-main_color h-full">
      <CellBoard title="Nombre de rol" />
    </div>
  );
}

export default HeadBoard;
