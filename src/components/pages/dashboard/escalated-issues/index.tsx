import Topbar from '@components/layout/topbar';

import Board from './Board';

export default function EscalatedIssues() {
  return (
    <div className="flex flex-1">
      <div className="grid grid-rows-6 h-screen bg-white w-[100%]">
        <div className="row-span-1">
          <Topbar variant="primary" title="Problemas a escalar" />
        </div>
        <div className="row-span-5">
          <Board />
        </div>
      </div>
    </div>
  );
}
