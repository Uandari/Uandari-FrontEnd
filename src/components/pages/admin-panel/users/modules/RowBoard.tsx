import deleteIcon from '@icons/deleteIcon.svg';
import editIcon from '@icons/editIcon.svg';

export type RowBoardProps = {
  userName: string;
  userImage: string;
  userRole?: string;
  controlNumber?: string;
  line?: string;
  celule?: string;
  operation?: string;
  turn?: string;
};

function RowBoard({
  userName,
  userImage,
  userRole,
  controlNumber,
  line,
  celule,
  operation,
  turn,
}: RowBoardProps) {
  return (
    <div className="grid grid-cols-8 border-b border-main_color h-24 ">
      {/* User general info */}
      <div className="flex items-center col-span-2 justify-center text-main_gray border-main_color">
        <img src={userImage} className="h-12 mr-3" alt="Foto de usuario" />
        <div className="flex flex-col">
          <div className="text-main_title_color">{userName}</div>
          <div className="text-main_gray">{userRole}</div>
        </div>
      </div>
      {/* Control number */}
      <div className="flex items-center justify-center text-main_gray">
        {controlNumber}
      </div>
      {/* Line */}
      <div className="flex items-center justify-center text-main_gray ">
        {line}
      </div>
      {/* Celule */}
      <div className="flex items-center justify-center text-main_gray ">
        {celule}
      </div>
      {/* Operation */}
      <div className="flex items-center justify-center text-main_gray ">
        {operation}
      </div>
      {/* Turn */}
      <div className="flex items-center justify-center text-main_gray">
        {turn}
      </div>

      {/* Buttons */}
      <div className="flex col-span-1 items-center justify-center">
        <button className="flex items-center gap-1 mx-5" type="button">
          <img src={editIcon} alt="plus-icon" className="h-6" />
        </button>
        <button className="flex items-center gap-1 mx-5" type="button">
          <img src={deleteIcon} alt="plus-icon" className="h-6" />
        </button>
      </div>
    </div>
  );
}

export default RowBoard;

RowBoard.defaultProps = {
  userRole: '',
  controlNumber: '',
  line: '',
  celule: '',
  operation: '',
  turn: '',
};
