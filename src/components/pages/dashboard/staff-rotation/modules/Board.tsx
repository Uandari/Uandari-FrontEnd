import { useState } from 'react';

import CalendarIcon from '@icons/calender.svg';
import { goalForYear } from '@mocks/GoalsForYear';
import { shiftsLabels } from '@mocks/Shifts';
import { Select } from 'antd';

import RowBoard from './RowBoard';

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
    <div className="overflow-y-auto bg-white">
      <div className=" overflow-y-scroll">
        <div className="flex gap-8 flex-wrap p-6">
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
            placeholder="Filtrar po célula"
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
        <div className="px-4 py-2 w-full border-y bg-slate-100">
          Seleccionar
        </div>
        <div className="flex px-4 py-2 w-full gap-2">
          <img src={CalendarIcon} alt="calendar-icon" />
          <p className="text-main_text_color text-sm"> Fecha </p>
        </div>

        <RowBoard
          help="Seleccionar lo necesario para realizar el proceso / HOE en ella se indica lo necesario para el proceso / En el entorno mirar  medios que no correspondan /Controlar también que los enseres personales (Bolsos, Comida, etc..) no esten fuera de la zona destinada."
          description="¿Esta la zona libre de piezas y/o objetos innecesarios en la zona de control?"
        />
        <div className="py-8 flex justify-end pr-8">
          <button
            type="button"
            className="bg-main_blue_dark text-white rounded-md py-1 px-6"
          >
            Guardar checklist
          </button>
        </div>
      </div>
    </div>
  );
}
