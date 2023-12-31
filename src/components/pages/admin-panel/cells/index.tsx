import Topbar from '@components/layout/topbar';
import { CellsListMock } from '@mocks/Cells';

import Board from './board';
import RowBoard from './modules/RowBoard';

export default function CellsList() {
  return (
    <div className="border border-b grid bg-white flex-1 h-screen">
      <div className="sticky top-0">
        <Topbar title="Gestión de usuarios" />
        <Board>
          {CellsListMock.map((cell) => (
            <RowBoard
              key={cell.id}
              cellNumber={cell.cellName}
              line={cell.idLine}
            />
          ))}
        </Board>
      </div>
    </div>
  );
}
