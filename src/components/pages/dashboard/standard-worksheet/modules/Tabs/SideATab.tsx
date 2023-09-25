import { useState } from 'react';

import { cardsGoalsTeam } from '@mocks/CardsGoalTeam';
import { cellSelect } from '@mocks/CellSelect';
import { shiftsLabels } from '@mocks/Shifts';
import { cellsLabels } from '@mocks/Cells';

import { goalForYear } from '@mocks/GoalsForYear';
import { teamGoals } from '@mocks/TeamGoals';
import { Select } from 'antd';
import RowBoard from '../boardSideA/RowBoard';


export default function SideATab() {
  const [goalsValues, setGoalsValues] = useState(goalForYear);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    // Actualiza el estado de los objetivos cuando cambia un input
    setGoalsValues((prevValues) =>
      prevValues.map((goal) =>
        goal.name === name ? { ...goal, value: parseInt(value, 10) } : goal,
      ),
    );
  };

  return (
    <div className="h-full">
      <div className="py-3 flex pr-6 lex items-center px-4 pb-7 gap-6 border-b">
      <Select
          showSearch
          placeholder="Selecciona el turno"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={shiftsLabels}
        />
        <Select
          showSearch
          placeholder="Selecciona la célula de este turno"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={cellsLabels}
        />
      </div>
      <div className="w-full grid grid-cols-5 gap-x-6 p-5">
        GoalCard
      </div>
      <div className="row-span-1 border-main_color">
        {teamGoals.map((month) => (
          <RowBoard
            key={month.month}
            month={month.month}
            result={month.result}
          />
        ))}
      </div>

      
    </div>
  );
}
