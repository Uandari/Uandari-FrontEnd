import ClockIcon from '@icons/clock-two 1.svg';
import { Select } from 'antd';

export type CellTabProps = {
  shift: string;
};

const shiftsLabels = [
  {
    value: 'Célula 1',
    label: 'Célula 1',
  },
  {
    value: 'Célula 2',
    label: 'Célula 2',
  },
  {
    value: 'Célula 3',
    label: 'Célula 3',
  },
];

function CellTab({ shift }: CellTabProps) {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-main_color">
      <div className="flex items-center gap-2">
        <img src={ClockIcon} alt="clock-icon" />
        <p className="text-main_text_color text-sm"> {shift} </p>
      </div>
      <Select
        placeholder="Selecciona la célula de este turno"
        options={shiftsLabels}
      />
    </div>
  );
}

export default CellTab;
