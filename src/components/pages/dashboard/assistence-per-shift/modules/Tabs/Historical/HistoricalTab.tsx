import { AssitanceListMock } from '@mocks/Assistence';
import { DatePicker } from 'antd';

import RowBoard from './RowBoard';

export default function HistoricalTab() {
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2  border-main_color">
        <DatePicker allowClear={false} picker="month" />
      </div>
      <div className="grid  grid-cols-5 border-y border-main_color h-11">
        <p className="font-medium flex items-center justify-center text-center">
          Día
        </p>
        <p className="font-medium flex items-center justify-center text-center">
          Presentes
        </p>
        <p className="font-medium flex items-center justify-center text-center">
          Ausentes
        </p>
        <p className=" font-medium flex items-center justify-center text-center">
          Prestados
        </p>
        <p className="font-medium flex items-center justify-center text-center">
          Capacitación/taller KVP
        </p>
      </div>
      <div>
        {AssitanceListMock.map((day) => (
          <RowBoard
            day={day.day}
            presentMust={day.presentMust}
            presentIs={day.presentIs}
            absentMust={day.absentMust}
            absentIs={day.absentIs}
            borrowedMust={day.borrowedMust}
            borrowedIs={day.borrowedIs}
            trainingMust={day.trainingMust}
            trainingIs={day.trainingIs}
          />
        ))}
      </div>
    </div>
  );
}
