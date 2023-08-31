import Topbar from '@components/layout/topbar';

import Board from './Board';

export default function AssistencePerShift() {
  return (
    <div className="flex flex-1 border">
      <div className="flex flex-1 flex-col bg-white">
        <div className='border-b'>
          <Topbar variant="secondary" title="Asistencia por turno" />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Board />
        </div>
      </div>
    </div>
  );
}
