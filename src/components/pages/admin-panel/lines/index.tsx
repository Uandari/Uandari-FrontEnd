import PlusIcon from '@assets/icons/plus.svg';
import Topbar from '@components/layout/topbar';
import { Line } from '@interfaces/Line';
import { LinesListMock } from '@mocks/Lines';

import RowBoard from './RowBoard';

export default function LinesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Líneas" variant="secondary" />
      <div className="flex flex-1 flex-col border overflow-y-scroll bg-white">
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <input
            placeholder="Buscar línea por nombre"
            className="border border-main_color pl-3 py-2 w-[300px] rounded-lg outline-none"
          />
          <button
            className="flex items-center gap-x-3 px-6 py-2 bg-main_blue_dark text-white rounded-lg"
            type="button"
          >
            <img className="" src={PlusIcon} alt="plus-icon" />
            Registrar nueva línea
          </button>
        </div>

        <div className="grid grid-cols-8 border-b py-2 px-5 border-main_color">
          <div className="font-medium text-main_text_color">ID</div>
          <div className="font-medium text-main_text_color">Nombre del rol</div>
        </div>
        {LinesListMock.map((line: Line) => (
          <RowBoard id={line.id} line={line.lineName} />
        ))}
      </div>
    </div>
  );
}
