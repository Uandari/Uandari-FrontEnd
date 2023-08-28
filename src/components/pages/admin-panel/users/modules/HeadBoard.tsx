import CellBoard from './CellBoard';

function HeadBoard() {
  return (
    <div className="grid grid-cols-4 border-b  border-main_color h-full">
      <CellBoard title="Usuario" colSpan="col-span-2 " />
      <CellBoard title="Número de control" />
    </div>
  );
}

export default HeadBoard;
