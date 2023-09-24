import { useState, useEffect } from 'react';

import BulletsButton from '@assets/icons/bulletsButton.svg';
import CategoryIcon from '@assets/icons/categories.svg';
import ClockIcon from '@assets/icons/clockIcon.svg';
import ResolveIcon from '@assets/icons/escalateIcon.svg';
import PeopleIcon from '@assets/icons/people.svg';
import QuantityIcon from '@assets/icons/quantity.svg';
import EscalateIcon from '@assets/icons/resolveIcon.svg';
import StatusPendingIcon from '@assets/icons/statusIcon.svg';
import StatusFinishedIcon from '@assets/icons/statusSuccessIcon.svg';
import DrawerComponent from '@components/basic/drawer';
import { IssueInterface } from '@interfaces/Issue';
import { User } from '@interfaces/IssueCard';
import { issueMock } from '@mocks/IssueMock';
import { Popover } from 'antd';

type IssueCardProps = {
  id: number;
  typeProblem: string;
  category: string;
  quantity: number;
  status: 'PENDING' | 'FINISHED';
  dateToSolveProblem: string;
  participants: User[];
  dateCreated: string;
};

function IssueCard({
  id,
  typeProblem,
  category,
  quantity,
  status,
  dateToSolveProblem,
  participants,
  dateCreated,
}: IssueCardProps) {
  const [open, setOpen] = useState(false);
  const [issueData, setIssueData] = useState<IssueInterface | null>(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setIssueData(issueMock);
  }, []);

  return (
    <div>
      <button
        onClick={toggleDrawer}
        type="button"
        className="w-full bg-white border border-main_color px-4 py-3 rounded-xl relative mb-4 hover:bg-[#FBFCFC] text-left "
      >
        <div className="flex gap-12">
          <div className="flex gap-x-2">
            <p className="text-main_gray font-medium text-lg">#{id} - </p>
            <p className="text-main_title_color font-medium text-lg">
              {typeProblem}
            </p>
          </div>
          {status === 'PENDING' ? (
            <div className="flex gap-2 bg-[#FDEEE0] border border-[#F2994A] rounded px-3 items-center">
              <img src={StatusPendingIcon} className="w-4" alt="icon-status" />
              <p className="text-main_orange font-medium text-sm">Pendiente</p>
            </div>
          ) : (
            <div className="flex gap-2 bg-[#E4F6E1] border border-[#0E9F57] rounded px-3 items-center">
              <img src={StatusFinishedIcon} className="w-4" alt="icon-status" />
              <p className="text-main_green text-sm font-medium">Resuelto</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-x-8 my-3">
          <div className="flex gap-1">
            <img src={CategoryIcon} alt="icon-description" />
            <p className="text-main_text_color">{category}</p>
          </div>
          <div className="flex gap-1">
            <img src={QuantityIcon} alt="icon-description" />
            <p className="text-main_text_color">{quantity} motores</p>
          </div>
          <div className="flex gap-1">
            <img src={ClockIcon} alt="icon-description" />
            <p className="text-main_text_color"> {dateToSolveProblem} </p>
          </div>
          <div className="flex gap-1">
            <img src={PeopleIcon} alt="icon-description" />
            <p className="text-main_text_color">
              {participants.length} responsables
            </p>
          </div>
        </div>
        <hr />
        <p className="text-main_gray pt-2">Añadido el {dateCreated}</p>
      </button>
      {issueData && (
        <DrawerComponent onClose={toggleDrawer} open={open} issue={issueData} />
      )}
    </div>
  );
}

export default IssueCard;
