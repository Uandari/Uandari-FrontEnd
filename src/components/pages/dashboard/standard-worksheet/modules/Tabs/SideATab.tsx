import { useState } from 'react';

import { cellsLabels } from '@mocks/Cells';
import { goalForYear } from '@mocks/GoalsForYear';
import { shiftsLabels } from '@mocks/Shifts';
import { days, operations } from '@mocks/StandardWorksheetA';
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
      <div className="py-3 flex pr-6 lex items-center px-4 pb-7 gap-6 ">
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
        <Select
          showSearch
          placeholder="Selecciona la La semana"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={days}
        />
      </div>
      <div className="grid grid-rows-6">
        <div className="grid grid-cols-12 row-span-6">
          <div className="grid grid-cols-9 col-span-2">
            <div className="grid grid-rows-3 col-span-6 ">
              <div className="border flex items-center justify-center ">
                Semana
              </div>
              <div className="border flex items-center justify-center ">
                Dia de la Semana
              </div>
              <div className="border flex items-center justify-center ">
                Operación
              </div>
            </div>
            <div className="grid col-span-3">
              <div className="flex items-center justify-center border">
                <div
                  style={{ transform: 'rotate(-90deg)' }}
                  className="text-center w-16 "
                >
                  {' '}
                  Grupo{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 col-span-10">
            <div className="border flex items-center justify-center">
              Semana 1
            </div>
            <div className="grid grid-cols-7">
              <div className="flex items-center justify-center border">L</div>
              <div className="flex items-center justify-center border">M</div>
              <div className="flex items-center justify-center border">M</div>
              <div className="flex items-center justify-center border">J</div>
              <div className="flex items-center justify-center border">V</div>
              <div className="flex items-center justify-center border">S</div>
              <div className="flex items-center justify-center border">D</div>
            </div>
          </div>
        </div>
        {operations.map((operation) => (
          <div className="grid grid-cols-12 border-main_color border ">
            <div className=" col-span-2 flex items-center justify-center">
              div
            </div>
            <div className="grid grid-cols-4 row-span-1 border">
              <div className="grid grid-rows-4 ">
                <div className="border flex items-center justify-center row-span-5 ">
                  <RowBoard
                    key={operation.operation}
                    operation={operation.operation}
                    result={operation.result}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
