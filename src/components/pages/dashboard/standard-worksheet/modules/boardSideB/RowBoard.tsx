import { useEffect, useState } from 'react';

import FirstStateIcon from '@assets/icons/FirstStateIcon.svg';
import FourthStateIcon from '@assets/icons/FourthStateIcon.svg';
import SecondStateIcon from '@assets/icons/SecondStateIcon.svg';
import ThirdStateIcon from '@assets/icons/ThirdStateIcon.svg';
import { Popover } from 'antd';

import FormStatus from './FormStatus';

export type RowBoardProps = {
  celule: string;
  operation: string;
  description: string;
  action: string;
  responsible: string;
  term: string;
  status: number;
  idDeviation: number;
};

function RowBoard({
  celule,
  operation,
  description,
  action,
  responsible,
  term,
  status,
  idDeviation,
}: RowBoardProps) {
  const [issueStateImg, setIssueStateImg] = useState('');

  useEffect(() => {
    switch (status) {
      case 1:
        setIssueStateImg(FirstStateIcon);
        break;
      case 2:
        setIssueStateImg(SecondStateIcon);
        break;
      case 3:
        setIssueStateImg(ThirdStateIcon);
        break;
      case 4:
        setIssueStateImg(FourthStateIcon);
        break;
      default:
    }
  }, [status]);
  return (
    <div className="grid grid-cols-8  border-main_color h-16">
      <div className="flex items-center  border-r justify-center text-main_gray">
        {idDeviation}
      </div>
      <div className="flex items-center border-b justify-center text-main_gray">
        {celule}
      </div>
      <div className="flex items-center border-b justify-center text-main_gray">
        {operation}
      </div>
      <div className="flex items-center border-b justify-center text-main_gray">
        {description}
      </div>
      <div className="flex items-center border-b justify-center text-main_gray">
        {action}
      </div>
      <div className="flex items-center border-b  justify-center text-main_gray">
        {responsible}
      </div>
      <div className="flex items-center border-b justify-center text-main_gray">
        {term}
      </div>
      <div className="flex items-center border-b justify-center text-main_gray">
        <Popover placement="left" title={<FormStatus />} trigger="click">
          <img
            className="cursor-pointer"
            src={issueStateImg}
            alt="state-icon"
          />
        </Popover>
      </div>
    </div>
  );
}

export default RowBoard;
