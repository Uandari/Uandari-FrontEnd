import { useState } from 'react';

import IconDots from '@assets/icons/bulletsButton.svg';
import { Popover } from 'antd';

type RowBoardProps = {
  name: string;
  lastnames: string;
  img: string;
  controlNumber: string;
  role: string;
  onDelete: () => void;
  onUpdate: () => void;
};

function RowBoard({
  name,
  lastnames,
  img,
  controlNumber,
  role,
  onDelete,
  onUpdate,
}: RowBoardProps) {
  const [openPopover, setOpenPopover] = useState(false);
  const handleOpenChange = (newOpen: boolean) => {
    setOpenPopover(newOpen);
  };
  return (
    <div className="grid grid-cols-5 border-b py-3 px-5 gap-4 relative">
      <div className="flex gap-x-2 items-center">
        <img className="w-12" src={img} alt="img-profile" />
        <div>
          <p className="font-medium text-main_title_color">
            {name} {lastnames}
          </p>
        </div>
      </div>

      <div className="flex items-center text-main_text_color text-xs">
        {controlNumber}
      </div>
      <div className="flex items-center text-main_text_color">{role}</div>
      <Popover
        className="absolute right-9 top-6"
        trigger="click"
        placement="left"
        open={openPopover}
        onOpenChange={handleOpenChange}
        content={
          <div className="w-[120px] flex flex-col">
            <button
              type="button"
              className="w-full py-2 px-3 rounded-lg hover:bg-slate-100 text-left"
              onClick={() => {
                setOpenPopover(false);
                onUpdate();
              }}
            >
              Editar
            </button>
            <button
              onClick={() => {
                setOpenPopover(false);
                onDelete();
              }}
              type="button"
              className="w-full py-2 px-3 rounded-lg hover:bg-slate-100 text-left"
            >
              Eliminar
            </button>
          </div>
        }
      >
        <button type="button" onClick={() => setOpenPopover(true)}>
          <img className="cursor-pointer" src={IconDots} alt="options-icon" />
        </button>
      </Popover>
    </div>
  );
}

export default RowBoard;
