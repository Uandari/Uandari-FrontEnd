import CalendarIcon from '@icons/calender.svg';
import { shiftsLabels } from '@mocks/Shifts';
import { Select } from 'antd';

import RowBoard from './RowBoard';

export default function Board() {
  return (
    <div className="overflow-y-auto bg-white">
      <div className=" overflow-y-scroll">
        <div className="flex gap-8 flex-grow p-6">
          <Select
            showSearch
            placeholder="Filtrar por mes"
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
            placeholder="Filtrar por año"
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
            placeholder="Filtrar por célula"
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
        <div className="px-6 py-2 w-full border-y bg-slate-100">
          Seleccionar
        </div>
        <div className="flex px-6 py-2 w-full border-b gap-2">
          <img src={CalendarIcon} alt="calendar-icon" />
          <p className="text-main_text_color text-sm"> Fecha </p>
        </div>

        <RowBoard />
      </div>
    </div>
  );
}
