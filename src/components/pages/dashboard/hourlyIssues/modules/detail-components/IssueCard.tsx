import { useEffect, useState } from 'react';

import DrawerComponent from '@components/basic/drawer/index';
import { IssueInterface } from '@interfaces/Issue';
import { issueMock } from '@mocks/IssueMock';

export type CardTabProps = {
  status: string;
  problem: string;
  description: string;
};

function IssueCard({ status, problem, description }: CardTabProps) {
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
        className="text-left hover:bg-slate-200"
        type="button"
      >
        <div className="py-4 border-b border-main_color px-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-main_yellow bg-ma" />
            <div className="text-main_text_color text-sm"> {status}</div>
          </div>
          <h4 className="text-lg font-medium text-main_title_color ">
            {problem}
          </h4>
          <p className="text-main_text_color text-sm">{description}</p>
        </div>
      </button>
      {issueData && (
        <DrawerComponent onClose={toggleDrawer} open={open} issue={issueData} />
      )}
    </div>
  );
}

export default IssueCard;
