import { useEffect, useState } from 'react';

import DrawerComponent from '@components/basic/drawer/index';
import { IssueInterface } from '@interfaces/Issue';
import { issueMock } from '@mocks/IssueMock';

type IssueCardDetailProps = {
  id: number;
  title: string;
  description: string;
};

function IssueCardDetail({ id, title, description }: IssueCardDetailProps) {
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
      <button type="button" onClick={toggleDrawer}>
        <div className="px-4 cursor-pointer mb-3 text-left">
          <p className="text-main_title_color text-sm font-medium">{title}</p>
          <p className="text-sm text-main_text_color">{description}</p>
        </div>
      </button>

      {issueData && (
        <DrawerComponent onClose={toggleDrawer} open={open} issue={issueData} />
      )}
    </div>
  );
}

export default IssueCardDetail;
