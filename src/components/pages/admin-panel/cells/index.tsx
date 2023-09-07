import Topbar from '@components/layout/topbar';
import Board from './board';
import RowBoard from './modules/RowBoard';
import { CellsListMock } from '@mocks/Cells';

export default function CellsList() {
  return (
    <div className="border border-b grid bg-white flex-1 h-screen">
      <div className="sticky top-0">
        <Topbar title="Gestión de usuarios" variant="secondary" />
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

