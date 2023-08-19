import { EscalatedIssuesMock } from '@mocks/EscalatedIssues';

import HeadBoard from './Boards/BoardPieces/HeadBoard';
import RowBoard from './Boards/BoardPieces/RowBoard';

export default function Table() {
  const mockData = EscalatedIssuesMock;
  return (
    <div className="h-full grid grid-rows-[7]">
      <div className="row-span-1 border-t border-main_color">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto row-span-6 border hide-scrollbar ">
        {mockData.map((data) => (
          <RowBoard data={data} />
        ))}
      </div>
    </div>
  );
}
