import { cellsLabels } from '@mocks/Cells';
import { shiftsLabels } from '@mocks/Shifts';
import { Select } from 'antd';

import { days } from '@mocks/StandardWorksheetA';

export default function HeadBoard() {
  return (
    <div>
      <div className="py-3 flex pr-6 items-center px-4 pb-7 gap-6 ">
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
          placeholder="Selecciona la semana"
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
      <div className="grid grid-rows-6 border-t border-b">
        <div className="grid grid-cols-12 row-span-6">
          <div className="grid grid-cols-9 col-span-2">
            <div className="grid grid-rows-3 col-span-6 ">
              <div className=" border-b flex items-center justify-center ">
                Semana
              </div>
              <div className=" flex items-center justify-center ">
                Dia de la Semana
              </div>
              <div className=" border-t flex items-center justify-center ">
                Operación
              </div>
            </div>
            <div className="grid col-span-3">
              <div className="flex items-center justify-center border-l">
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
          <div className="grid grid-rows- col-span-10">
            <div className="border-l flex items-center justify-center row-span-1">
              Semana 1
            </div>
            <div className="grid grid-cols-7 row-span-2 border-t">
              <div className="flex items-center justify-center border-l ">L</div>
              <div className="flex items-center justify-center border-l">M</div>
              <div className="flex items-center justify-center border-l">M</div>
              <div className="flex items-center justify-center border-l">J</div>
              <div className="flex items-center justify-center border-l">V</div>
              <div className="flex items-center justify-center border-l">S</div>
              <div className="flex items-center justify-center border-l">D</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
