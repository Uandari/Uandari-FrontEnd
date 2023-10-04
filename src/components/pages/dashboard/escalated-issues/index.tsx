import Topbar from '@components/layout/topbar';

import Board from './Board';

export default function EscalatedIssues() {
  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Problemas a escalar" issues={4} underline />
      <div className="flex-1 overflow-y-auto bg-main_white">
        <Board />
      </div>
    </div>
  );
}
