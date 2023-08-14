import editIcon from '@assets/editIcon.svg';
import deleteIcon from '@assets/deletIcon.svg';

export type RowBoardProps = {
  userName: string;
  userImage: string;
  userRole: string;
  controlNumber: string;
  line: string;
  celule: string;
  operation: string;
  turn: string;
};

function RowBoard({ userName, userImage, userRole, controlNumber, line,celule, operation, turn }: RowBoardProps) {
  return (
    <div className="grid grid-cols-8 border-b border-main_color h-24 ">
      {/* User general info */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {userName} {userImage} {userRole}
      </div>
      {/* Control number */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {controlNumber}
      </div>
      {/* Line */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {line}
      </div>
      {/* Celule */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {celule}
      </div>
      {/* Operation */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {operation}
      </div>
      {/* Turn */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {turn}
      </div>
      
      {/* Buttons */}
      <div className="flex col-span-2 items-center justify-center">
        <button className="flex items-center gap-1" type="button">
          <img src={editIcon} alt="plus-icon" />
        </button>
        <button className="flex items-center gap-1" type="button">
          <img src={deleteIcon} alt="plus-icon" />
        </button>
      </div>
    </div>
  );
}

export default RowBoard;
