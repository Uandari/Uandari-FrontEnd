import Topbar from '@components/layout/topbar';

import Board from './Board';

export default function TeamGoals() {
  return (
    <div className="flex flex-1 border">
      <div className="flex flex-1 flex-col bg-white">
          <Topbar variant="secondary" title="Metas de equipo" underline/>
        <div className="flex-1 overflow-y-auto">
          <Board />
        </div>
      </div>
    </div>
  );
}
