import deleteIcon from '@icons/deleteIcon.svg';
import editIcon from '@icons/editIcon.svg';

export type RowBoardProps = {
  userName: string;
  controlNumber: string;
  role: string;
  imageUrl: string;
  onDelete: () => void;
  onUpdate: () => void;
};

export default function RowBoard({
  userName,
  controlNumber,
  role,
  imageUrl,
  onDelete,
  onUpdate,
}: RowBoardProps) {
  return (
    <div className="grid grid-cols-4  border-b border-main_color h-24 ">
      {/* User general info */}
      <div className="flex items-center col-span-2 pl-24  text-main_gray border-main_color">
        <img src={imageUrl} className="h-12 mr-3" alt="Avatar de usuario" />
        <div className="flex flex-col">
          <div className="text-main_title_color">{userName}</div>
          <div className="text-main_gray">{role}</div>
        </div>
      </div>
      {/* Control number */}
      <div className="flex items-center justify-start  pl-28 text-center text-main_gray">
        {controlNumber}
      </div>

      {/* Buttons */}
      <div className="flex col-span-1 items-center justify-center">
        <button
          className="flex items-center gap-1 mx-5"
          type="button"
          onClick={onUpdate}
        >
          <img src={editIcon} alt="plus-icon" className="h-6" />
        </button>
        <button
          className="flex items-center gap-1 mx-5"
          type="button"
          onClick={onDelete}
        >
          <img src={deleteIcon} alt="plus-icon" className="h-6" />
        </button>
      </div>
    </div>
  );
}
