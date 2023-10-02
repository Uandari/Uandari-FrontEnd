import PlusIcon from '@assets/icons/plus.svg';
import Topbar from '@components/layout/topbar';
import { Cell } from '@interfaces/Cell';
import { CellsListMock } from '@mocks/Cells';

import RowBoard from './RowBoard';

export default function CellsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Células" variant="secondary" />
      <div className="flex flex-1 flex-col border overflow-y-scroll bg-white">
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <input
            placeholder="Buscar"
            className="border border-main_color pl-3 py-2 w-[300px] rounded-lg outline-none"
          />
          <button
            className="flex items-center gap-x-3 px-6 py-2 bg-main_blue_dark text-white rounded-lg"
            type="button"
          >
            <img className="" src={PlusIcon} alt="plus-icon" />
            Registrar nueva célula
          </button>
        </div>

        <div className="grid grid-cols-3 border-b py-2 px-5 border-main_color">
          <div className="font-medium text-main_text_color">Número de célula</div>
          <div className="font-medium text-main_text_color">Team Leader</div>
          <div className="font-medium text-main_text_color">Línea</div>
        </div>
        {CellsListMock.map((cell: Cell) => (
          <RowBoard cell={cell.cellName} line={cell.line} teamLeader={cell.teamLeader}/>

        ))}
      </div>
    </div>
  );
}
