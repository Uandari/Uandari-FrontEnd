import { useEffect, useState } from 'react';

import CheckIcon from '@assets/icons/checkIcon.svg';
import FirstStateIcon from '@assets/icons/FirstStateIcon.svg';
import FourthStateIcon from '@assets/icons/FourthStateIcon.svg';
import SecondStateIcon from '@assets/icons/SecondStateIcon.svg';
import ThirdStateIcon from '@assets/icons/ThirdStateIcon.svg';
import UnCheckIcon from '@assets/icons/unCheckIcon.svg';
import { EscalatedIssues } from '@interfaces/EscalatedIssue';
import { Popover } from 'antd';

import FormStatus from './FormStatus';

export default function RowBoard({
  afecta5s,
  desvioEscala,
  estado,
  fechaEscalamiento,
  idEscalaProblema,
  idUsuario,
  impulsor,
  medidaAcordada,
  plazo,
}: EscalatedIssues) {
  const [issueStateImg, setIssueStateImg] = useState('');

  /* const handleChangeStatus = () => {

  }; */

  useEffect(() => {
    switch (estado) {
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
  }, [estado]);

  return (
    <div className="grid grid-cols-8 border-b border-main_color h-16">
      <div className="flex items-center justify-center text-main_gray">
        {fechaEscalamiento}
      </div>
      <div className="flex items-center justify-center text-main_gray ">
        {desvioEscala}
      </div>
      <div className="flex items-center justify-center text-main_gray">
        {impulsor}
      </div>
      <div className="flex items-center justify-center text-main_gray">
        {afecta5s ? (
          <img src={CheckIcon} alt="check-icon" />
        ) : (
          <img src={UnCheckIcon} alt="uncheck-icon" />
        )}
      </div>
      <div className="flex items-center justify-center text-main_gray">
        {medidaAcordada}
      </div>
      <div className="flex items-center justify-center text-main_gray">
        {idUsuario}
      </div>
      <div className="flex items-center justify-center text-main_gray">
        {plazo}
      </div>
      <div className="flex items-center justify-center text-main_gray">
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
