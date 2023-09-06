export type RowBoardProps = {
  userName: string;
  controlNumber: string;
  motor: string;
  line: string;
  shift: string;
  cell: string;
  operation: string;
  imageUrl: string;
};

function RowBoard({
  userName,
  controlNumber,
  motor,
  line,
  shift,
  cell,
  operation,
  imageUrl,
}: RowBoardProps) {
  return (
    <div className="grid grid-cols-8  border-b border-main_color h-24 ">
      {/* User general info */}
      <div className="flex items-center col-span-2 pl-24  text-main_gray border-main_color">
        <img src={imageUrl} className="h-12 mr-3" alt="Foto de usuario" />
        <div className="flex flex-col">
          <div className="text-main_title_color">{userName}</div>
          <div className="text-main_gray">Técnico</div>
        </div>
      </div>
      {/* Control number */}
      <div className="flex items-center justify-center text-main_gray">
        {controlNumber}
      </div>
      {/* Motor */}
      <div className="flex items-center justify-center text-main_gray">
        {motor}
      </div>
      {/* Line */}
      <div className="flex items-center justify-center text-main_gray">
        {line}
      </div>
      {/* Shift */}
      <div className="flex items-center justify-center text-main_gray">
        {cell}
      </div>
      {/* Celule */}
      <div className="flex items-center justify-center text-main_gray">
        {operation}
      </div>
      {/* Operation */}
      <div className="flex items-center justify-center text-main_gray">
        {shift}
      </div>
    </div>
  );
}

export default RowBoard;
