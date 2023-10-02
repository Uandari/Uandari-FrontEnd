import { useState } from 'react';

import IconDots from '@assets/icons/bulletsButton.svg';
import { Popover } from 'antd';

type RowBoardProps = {
  id: number;
  line: string;
};

function RowBoard({ id, line }: RowBoardProps) {
  const [openPopover, setOpenPopover] = useState(false);
  const handleOpenChange = (newOpen: boolean) => {
    setOpenPopover(newOpen);
  };
  return (
    <div className="grid grid-cols-8 border-b py-3 px-5 border-main_color relative">
      <div className="font-medium text-main_gray">#{id}</div>
      <div className="text-main_text_color">{line}</div>
      <Popover
        className="absolute right-9 top-3"
        trigger="click"
        placement="left"
        open={openPopover}
        onOpenChange={handleOpenChange}
        content={
          <div className="w-[120px] flex flex-col">
            <button
              type="button"
              className="w-full py-2 px-3 rounded-lg hover:bg-slate-100 text-left"
            >
              Editar
            </button>
            <button
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
