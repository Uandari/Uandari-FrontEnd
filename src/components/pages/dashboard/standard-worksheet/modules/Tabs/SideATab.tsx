import { useState } from 'react';

import { shiftsLabels } from '@mocks/Shifts';
import { cellsLabels } from '@mocks/Cells';

import { goalForYear } from '@mocks/GoalsForYear';
import { operations } from '@mocks/StandardWorksheetA';
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
      </div>
      <div className='grid grid-rows-2'>
        <div className='grid grid-cols-12'>
          <div className='grid grid-rows-4 col-span-1'>
            <div className='border flex items-center justify-center '>
              Semana
            </div>
            <div className='border flex items-center justify-center '>
              Dia de la Semana
            </div>
            <div className='border flex items-center justify-center '>
              Operación
            </div>
            <div className='border flex items-center justify-center  '>
              Mapeo
            </div>
          </div>
          <div className='grid grid-rows-4 col-span-1'>
            <div className='flex items-center justify-center row-span-3 border'>
              <div
                style={{ transform: 'rotate(-90deg)' }}
                className="text-center w-16 "
              > Grupo </div>
            </div>
            <div className=' border flex items-center justify-center '>
              Mapeo
            </div>
          </div>
          <div className='grid grid-cols-4 col-span-10'>
            <div className='border flex items-center justify-center'>
              Semana
            </div>
            <div className='border flex items-center justify-center '>
              Semana
            </div>
            <div className='border flex items-center justify-center'>
              Semana
            </div>
            <div className='border flex items-center justify-center'>
              Semana
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-1 grid grid-cols-12 border-main_color">


        <div className='border col-span-1'>

        </div>
        <div className='border col-span-10'>
          <div className='grid grid-cols-4 row-span-1'>

            <div className='grid grid-rows-4 '>
              <div className='border flex items-center justify-center row-span-5 '>

                {operations.map((operation) => (
                  <RowBoard
                    key={operation.operation}
                    operation={operation.operation}
                    result={operation.result}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>
  );
}
