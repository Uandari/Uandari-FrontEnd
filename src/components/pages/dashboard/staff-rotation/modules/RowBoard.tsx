import { shiftsLabels } from '@mocks/Shifts';
import { Select } from 'antd';

export default function RowBoard() {
  return (
    <div className="grid grid-cols-7 border-b gap-x-8 px-6 py-3 items-center">
      <div className="grid grid-rows-2 col-span-2 text-main_text_color relative">
        <p>Juan Martínez Delgado</p>
        <p className="text-main_gray">Puesto</p>
      </div>
      <div className="grid col-span1 row-span-2  text-main_text_color relative">
        <Select
          showSearch
          placeholder="Planeado"
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
      </div>
      <div className="grid col-span-1  row-span-2  text-main_text_color relative">
        <Select
          showSearch
          placeholder="Real"
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
      </div>
    </div>
  );
}

RowBoard.defaultProps = {
  observation: null,
  state: null,
};
