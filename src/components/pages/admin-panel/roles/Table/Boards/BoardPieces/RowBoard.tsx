import editIcon from '@icons/editIcon.svg';
import deleteIcon from '@icons/deleteIcon.svg';

export type RowBoardProps = {
  roleName: string;
};

function RowBoard({ roleName }: RowBoardProps) {
  return (
    <div className="grid grid-cols-2 border-b border-main_color h-24">
      {/* Role name*/}
      <div className="flex items-center col-span-1  justify-center text-main_gray ">
        {roleName}
      </div>
      
      {/* Buttons */}
      <div className="flex col-span-1 items-center justify-center">
        <button className="flex items-center gap-1 mx-5" type="button">
          <img src={editIcon} alt="plus-icon"  className='h-6'/>
        </button>
        <button className="flex items-center gap-1 mx-5" type="button">
          <img src={deleteIcon} alt="plus-icon" className='h-6'/>
        </button>
      </div>
    </div>
  );
}

export default RowBoard;
