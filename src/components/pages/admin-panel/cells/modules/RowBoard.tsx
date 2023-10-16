/* import deleteIcon from '@icons/deleteIcon.svg';
import editIcon from '@icons/editIcon.svg';
 */
export type RowBoardProps = {
  cellNumber: string;
  line: number;
};

export default function RowBoard({ cellNumber, line }: RowBoardProps) {
  return (
    <div className="grid grid-cols-4  border-b border-main_color h-24 ">
      {/* Control number */}
      <div className="flex items-center justify-start  pl-28 text-center text-main_gray">
        {cellNumber}
      </div>
      {/* Control number */}
      <div className="flex items-center justify-start  pl-28 text-center text-main_gray">
        {line}
      </div>

      {/* Buttons */}
      {/* <div className="flex col-span-1 items-center justify-center">
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
      </div> */}
    </div>
  );
}
