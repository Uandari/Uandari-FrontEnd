import { useEffect, useState } from 'react';

import ClockIcon from '@icons/clock-two 1.svg';
import { shiftsLabels } from '@mocks/Shifts';
import { Select } from 'antd';

import CellBoard from './CellBoard';

function HeadBoard() {
  const [shift, setShift] = useState('');

  useEffect(() => {
    // Obtener la hora actual
    const now = new Date();
    const currentHour = now.getHours();

    // Asignar el turno en función de la hora actual
    if (currentHour >= 6 && currentHour < 14) {
      setShift('Matutino');
    } else if (currentHour >= 14 && currentHour < 22) {
      setShift('Vespertino');
    } else {
      setShift('Nocturno');
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2 border-b border-main_color">
        <div className="flex items-center gap-2">
          <img src={ClockIcon} alt="clock-icon" />
          <p className="text-main_text_color text-sm"> {shift} </p>
        </div>
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
          options={shiftsLabels}
        />
      </div>
      <div className="grid grid-cols-12 border-b border-main_color h-full">
        <CellBoard title="Hora" />
        <CellBoard title="Operación" />
        <CellBoard title="Tiempo de paro" />
        <CellBoard title="Área responsable" />
        <CellBoard title="Es" />
        <CellBoard title="Debe" />
        <CellBoard title="Es acumulado" />
        <CellBoard title="Debe acumulado" />
        <CellBoard title="Diferencia" />
        <CellBoard title="Diferencia Acumulada" />
        <CellBoard title="Problema" colSpan="2" />
      </div>
    </div>
  );
}

export default HeadBoard;
