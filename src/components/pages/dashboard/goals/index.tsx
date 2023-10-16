import { useState } from 'react';

import Topbar from '@components/layout/topbar';
import { monthGoals } from '@mocks/MonthGoals';

import GoalsReport from './GoalsReport';
import MonthDetails from './MonthDetails';

function Goals() {
  const [year, setYear] = useState('');

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Topbar title="Metas" underline />
      <div className="flex flex-1 overflow-y-auto">
        <div className="w-3/5">
          {monthGoals.map((month) => {
            return (
              <MonthDetails
                key={month.id}
                month={month.name}
                weekOne={month.weekOne}
                weekTwo={month.weekTwo}
                weekThree={month.weekThree}
                weekFour={month.weekFour}
              />
            );
          })}
        </div>
        <div className="w-2/5 border-l border-main_color pt-6 px-4">
          <GoalsReport setYear={setYear} year={year} />
        </div>
      </div>
    </div>
  );
}

export default Goals;
