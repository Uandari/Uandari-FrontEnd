import { assitanceDay } from '@mocks/AssitanceDay';

import AssitanceRow from './AssitanceRow';
import HeadBoard from './HeadBoard';

export default function AssitenceTab() {
  return (
    <div className="h-[550px] ">
      <HeadBoard />
      {assitanceDay.map((day) => (
        <AssitanceRow
          shift={day.shift}
          isBorrowed={day.isBorrowed}
          isMissing={day.isMissing}
          isPresent={day.isPresent}
          isTraining={day.isTraining}
          mustBorrowed={day.mustBorrowed}
          mustPresent={day.mustPresent}
          mustMissing={day.mustMissing}
          mustTraining={day.mustTraining}
        />
      ))}
    </div>
  );
}
