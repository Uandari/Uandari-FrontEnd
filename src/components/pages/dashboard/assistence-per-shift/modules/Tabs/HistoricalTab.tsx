import React from 'react';
import RowBoard from '../RowBoard';
import { UsersListMock } from '@mocks/Assistence';
import { Select } from 'antd';

export default function HistoricalTab() {
  // Arreglo de opciones para los meses de enero a diciembre
  const months = [
    { value: '01', label: 'Enero' },
    { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' },
    { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2  border-main_color">
        <div className="flex items-center gap-2">
          <p className="text-main_text_color text-sm"> Aquí no se qué querías que hubiera</p>
        </div>
        <Select
          showSearch
          placeholder="Selecciona mes"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={months} // Utiliza el arreglo de meses como opciones
        />
      </div>
      <div className="grid  grid-cols-5 border-y border-main_color h-11">
        <p className="font-medium flex items-center justify-center text-center">Día</p>
        <p className="font-medium flex items-center justify-center text-center">Presentes</p>
        <p className="font-medium flex items-center justify-center text-center">Ausentes</p>
        <p className=" font-medium flex items-center justify-center text-center">Prestados</p>
        <p className="font-medium flex items-center justify-center text-center">Capacitación/taller KVP</p>
      </div>
      <div>
        {UsersListMock.map((day) => (
          <RowBoard
            day={day.day}
            presentMust={day.presentMust}
            presentIs={day.presentIs}
            absentMust={day.absentMust}
            absentIs={day.absentIs}
            borrowedMust={day.borrowedMust}
            borrowedIs={day.borrowedIs}
            trainingMust={day.trainingMust}
            trainingIs={day.trainingIs}
          />
        ))}
      </div>
    </div>
  );
}
