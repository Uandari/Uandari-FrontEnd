import CellBoard from './CellBoard';

function HeadBoard() {
  return (
    <div className="grid grid-cols-2 border-b border-main_color h-full  py-2">
      <CellBoard title="Nombre completo" />
      <CellBoard title="Número de control" />
    </div>
  );
}

export default HeadBoard;
