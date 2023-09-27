import { operations } from '@mocks/Operations';
import { realPositionStatus } from '@mocks/StaffRotation';
import { Select } from 'antd';

export type RowBoardProps = {
  technitianName: string;
  position: string;
};


export default function RowBoard({ technitianName, position }: RowBoardProps) {
  const operationsNames = operations.map((operation) => operation.name);
  return (
    <div className="grid grid-cols-10 border-b gap-x-8 px-6 py-3 items-center">
      <div className="grid grid-rows-2 col-span-2 text-main_text_color relative">
        <p>{technitianName}</p>
        <p className="text-main_gray">{position}</p>
      </div>
      <div className="grid col-span-2 row-span-2  text-main_text_color relative">
      <Select placeholder="Filtrar por célula">
            {operationsNames.map((name) => (
              <Select.Option key={name} value={name}>
                {name}
              </Select.Option>
            ))}
          </Select>
      </div>
      <div className="grid col-span-2 row-span-2  text-main_text_color relative">
        <Select
          placeholder="Posición Real"
          options={realPositionStatus}
        />
      </div>
    </div>
  );
}

RowBoard.defaultProps = {
  observation: null,
  state: null,
};
