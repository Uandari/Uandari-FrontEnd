import { useState } from 'react';

import InfoIcon from '@assets/icons/infoIcon.svg';
import { Popover } from 'antd';

type RowReportProp = {
  description: string;
  state?: boolean;
  observation?: string;
  help: string;
};

export default function RowBoard({ description, help, state, observation }: RowReportProp) {
  const [yesSelected, setYesSelected] = useState<boolean | null>(
    state === true ? true : null,
  );
  const [noSelected, setNoSelected] = useState<boolean | null>(
    state === false ? true : null,
  );

  const handleYesClick = () => {
    setYesSelected(true);
    setNoSelected(false);
  };

  const handleNoClick = () => {
    setYesSelected(false);
    setNoSelected(true);
  };
  return (
    <div className="grid grid-cols-7 border-b ">
      
      <div className="col-span-3 p-3 border-r text-main_text_color relative">
        <Popover
          placement="rightBottom"
          className="cursor-pointer absolute right-2 top-1"
          trigger="click"
          content={<div className="w-[200px]">{help}</div>}
        >
          <img src={InfoIcon} alt="info" />
        </Popover>
        {description}
      </div>
      <div className="col-span-1 border-r justify-center items-center grid grid-cols-2">
        {/* Cuadro para cambiar a "Sí" */}
        <button
          type="button"
          className={`border-r w-full h-full ${
            yesSelected ? 'bg-green-400' : ''
          }`}
          onClick={handleYesClick}
          aria-label="btn-yes"
        />
        {/* Cuadro para cambiar a "No" */}
        <button
          type="button"
          className={` w-full h-full ${noSelected ? 'bg-red-400' : ''}`}
          onClick={handleNoClick}
          aria-label="btn-no"
        />
      </div>
      <div className="col-span-3">
        <textarea className="w-full h-full outline-none p-2 text-start resize-none text-main_text_color" />
      </div>
    </div>
  );
}

RowBoard.defaultProps = {
  observation: null,
  state: null,
};
