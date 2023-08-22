import PlusIcon from '@icons/plus.svg';
import { Popover } from 'antd';

import FormBoard from './FormBoard';
import ProblemCard from './ProblemCard';

export type RowBoardProps = {
  hour: string;
  problems?: ProblemCardProps[];
};

export type ProblemCardProps = {
  id: string;
  hour: string;
  title: string;
  description: string;
};

function RowBoard({ hour, problems }: RowBoardProps) {
  return (
    <div className="grid grid-cols-8 border-b border-main_color">
      {/* Hora */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        <div className="py-6">{hour}</div>
      </div>
      {/* Es */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color ">
        <input
          className="w-full h-full border-none text-center outline-none text-lg cursor-pointer"
          type="number"
        />
      </div>
      {/* Debe */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color">
        <input
          className="w-full h-full border-none text-center outline-none text-lg cursor-pointer"
          type="number"
        />
      </div>
      {/* Debe acumulado */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        0
      </div>
      {/* Diferencia */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        0
      </div>
      {/* Diferencia acumulada */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        0
      </div>
      {/* Problema */}
      <div className="flex flex-col col-span-2 items-center justify-center py-4">
        {problems &&
          problems.length > 0 &&
          problems.map(() => (
            <div>
              <ProblemCard />
            </div>
          ))}
        <Popover placement="left" trigger="click" content={<FormBoard />}>
          <button className="flex items-center gap-1" type="button">
            <img src={PlusIcon} alt="plus-icon" />
            <p className="text-main_gray text-sm">Nuevo problema</p>
          </button>
        </Popover>
      </div>
    </div>
  );
}

export default RowBoard;

RowBoard.defaultProps = {
  problems: [],
};
