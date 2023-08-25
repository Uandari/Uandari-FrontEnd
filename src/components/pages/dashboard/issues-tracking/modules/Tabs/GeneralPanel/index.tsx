import { IssueCardMock } from '@mocks/IssuesCard';

import IssueCard from '../../IssueCard';

function GeneralPanel() {
  return (
    <div className="flex w-full flex-grow flex-1 border border-purple-600">
      <div className="grid grid-cols-3 w-full">
        <div className="col-span-2 bg-orange-400">
          <p className="text-4xl">Text</p>
        </div>
        <div className="flex flex-1 bg-purple-400">p</div>
      </div>
    </div>
  );
}

export default GeneralPanel;
