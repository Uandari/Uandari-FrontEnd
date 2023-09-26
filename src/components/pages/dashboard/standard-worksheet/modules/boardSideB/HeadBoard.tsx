import { Select } from 'antd';
import CellBoard from './CellBoard';
import { cellsLabels } from '@mocks/Cells';

export default function HeadBoard() {
  return (
    <div>
      <div className="flex items-center px-4 pb-4 gap-6 border-b border-main_color">
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
    <div className="grid grid-cols-8 border-b border-main_color h-full">
      <CellBoard title="" />
      <CellBoard title="Célula" />
      <CellBoard title="Operación" />
      <CellBoard title="Descripción de la desviación" />
      <CellBoard title="Acción" />
      <CellBoard title="Responsable" />
      <CellBoard title="Plazo" />
      <CellBoard title="Estado" />
    </div>
    </div>
  );
}

