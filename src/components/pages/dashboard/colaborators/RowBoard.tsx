export type RowBoardProps = {
    userName: string;
    controlNumber: string;
    role: string;
    imageUrl: string;
  };
  
  function RowBoard({ userName, controlNumber, role, imageUrl }: RowBoardProps) {
    return (
      <div className="grid grid-cols-4 border-b border-main_color h-24 ">
        {/* User general info */}
        <div className="flex items-center col-span-2 pl-12  text-main_gray border-main_color">
          <img src={imageUrl} className="h-12 mr-3" alt="Foto de usuario" />
          <div className="flex flex-col">
            <div className="text-main_title_color">{userName}</div>
            <div className="text-main_gray">{role}</div>
          </div>
        </div>
        {/* Control number */}
        <div className="flex items-center justify-start pl-12 text-center text-main_text_color">
          {controlNumber}
        </div>
      </div>
    );
  }
  
  export default RowBoard;