import Topbar from '@components/layout/topbar';
import CalendarIcon from '@icons/calender.svg';
import { weeks } from '@mocks/StaffRotation';

import Board from './modules/Board';
import RowBoard from './modules/RowBoard';

export default function StaffRotation() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Topbar title="Rotación de personal" underline />
      <div className="flex-1 overflow-y-auto  bg-main_white">
        <Board>
          {weeks.map((week) => (
            <div>
              <div className="px-6 py-2 w-full border-b bg-slate-100">
                <div key={week.value}>{week.value}</div>
              </div>
              <div key={week.value}>
                {week.days.map((day) => (
                  <div>
                    <div className="flex px-6 py-2 w-full border-b gap-2">
                      <img src={CalendarIcon} alt="calendar-icon" />
                      <p
                        className="text-main_text_color text-sm"
                        key={day.date}
                      >
                        {day.date}{' '}
                      </p>
                    </div>
                    {day.workers.map((worker) => (
                      <RowBoard
                        key={worker.name}
                        technitianName={worker.name}
                        position="posicion"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Board>
      </div>
    </div>
  );
}
