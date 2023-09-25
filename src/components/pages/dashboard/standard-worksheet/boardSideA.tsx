import { useState } from 'react';

import { cardsGoalsTeam } from '@mocks/CardsGoalTeam';
import { cellSelect } from '@mocks/CellSelect';
import { goalForYear } from '@mocks/GoalsForYear';
import { teamGoals } from '@mocks/TeamGoals';
import { Select } from 'antd';

import GoalsCard from './modules/GoalsCard';
import RowBoard from './modules/RowBoard';

export default function Board() {
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Evitar que se presione la tecla "e"
    if (e.key === 'e') {
      e.preventDefault();
    }
  };

  return (
    <div className="h-full">
      <div className="py-3 flex justify-end pr-6">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Seleccionar célula"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={cellSelect}
          onChange={onChange}
        />
      </div>
      <div className="w-full grid grid-cols-5 gap-x-6 p-5">
        {cardsGoalsTeam.map((card) => (
          <GoalsCard
            key={card.title}
            title={card.title}
            done={card.done}
            accidents={card.accidents}
            incomplete={card.incomplete}
            free={card.free}
          />
        ))}
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

      <div className="pl-5 pb-5 w-[500px]">
        <div className="mb-2 flex justify-between">
          <h3 className="font-medium text-main_title_color">
            Objetivos indicadores
          </h3>
        </div>
        <div className="grid grid-cols-5 text-main_text_color border-x border-t">
          <div className="grid grid-rows-5 col-span-2">
            {goalsValues.map((goal) => (
              <p key={goal.name} className="py-1 pl-2 border-b">
                {goal.title}
              </p>
            ))}
          </div>
          <div className="grid grid-rows-5 col-span-3">
            {goalsValues.map((goal) => (
              <input
                key={goal.name}
                name={goal.name}
                type="number"
                className="border-l border-b pl-2 outline-none"
                placeholder="Cantidad"
                value={goal.value}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e)}
                min={0}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          className="bg-main_blue_dark px-6 py-1 text-white rounded-md mt-2"
        >
          Guardar
        </button>
      </div>
    </div>
  );
}
