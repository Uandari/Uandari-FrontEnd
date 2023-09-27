import { cellsLabels } from '@mocks/Cells';
import { monthGoals } from '@mocks/MonthGoals';
import { years } from '@mocks/Years';
import { Select } from 'antd';

export default function HeadBoard() {
  const monthNames = monthGoals.map((goal) => goal.name);
  return (
    <div className="flex gap-8 flex-grow border-b p-6">
      <Select placeholder="Filtrar por mes">
        {monthNames.map((name) => (
          <Select.Option key={name} value={name}>
            {name}
          </Select.Option>
        ))}
      </Select>
      <Select placeholder="Filtrar por año" options={years} />
      <Select placeholder="Filtrar por celula" options={cellsLabels} />
    </div>
  );
}
