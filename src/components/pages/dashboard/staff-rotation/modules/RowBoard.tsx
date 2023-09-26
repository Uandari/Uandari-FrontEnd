import { useState } from 'react';

import InfoIcon from '@assets/icons/infoIcon.svg';
import { Popover } from 'antd';

type RowReportProp = {
  description: string;
  state?: boolean;
  observation?: string;
  help: string;
};

export default function RowBoard({
  description,
  help,
  state,
  observation,
}: RowReportProp) {
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
    <div className="grid grid-cols-7 border-y">
      <div className="col-span-3 p-3 border-r text-main_text_color relative">
        asfsa
      </div>
      <div className="col-span-1 border-r justify-center items-center grid grid-cols-2">
        safs
      </div>
    </div>
  );
}

RowBoard.defaultProps = {
  observation: null,
  state: null,
};
