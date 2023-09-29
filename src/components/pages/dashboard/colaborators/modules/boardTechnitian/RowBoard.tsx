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
    <div className="grid grid-cols-8 border-b border-main_color py-6 gap-x-6 ">
      {/* User general info */}
      <div className="flex items-center col-span-2 pl-12  text-main_gray border-main_color">
        <img src={imageUrl} className="h-12 mr-3" alt="Foto de usuario" />
        <div className="flex flex-col">
          <div className="text-main_title_color">{userName}</div>
          <div className="text-main_gray">Técnico</div>
        </div>
      </div>
      {/* Control number */}
      <div className="flex items-center  text-main_text_color">
        {controlNumber}
      </div>
      {/* Motor */}
      <div className="flex items-center text-main_text_color">{motor}</div>
      {/* Line */}
      <div className="flex items-center text-main_text_color">{line}</div>
      {/* Shift */}
      <div className="flex items-center text-main_text_color">{cell}</div>
      {/* Celule */}
      <div className="flex items-center text-main_text_color">{operation}</div>
      {/* Operation */}
      <div className="flex items-center text-main_text_color">{shift}</div>
    </div>
  );
}

export default RowBoard;