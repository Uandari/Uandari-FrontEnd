import { useState } from 'react';

import DropIcon from '@icons/dropIcon.svg';
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
  const [showAllProblems, setShowAllProblems] = useState(false);
  const additionalProblemCount = problems!.length - 1;

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
      <div className="flex flex-col col-span-2 items-center justify-center pt-4 pb-2">
        {problems && problems.length > 0 && (
          <div>
            <ProblemCard />
            {showAllProblems &&
              problems.slice(1).map(() => (
                <div>
                  <ProblemCard />
                </div>
              ))}
            {additionalProblemCount > 0 && (
              <button
                type="button"
                onClick={() => setShowAllProblems(!showAllProblems)}
              >
                <p className="text-main_blue text-sm cursor-pointer pl-4">
                  {showAllProblems ? (
                    <div className="mb-2 flex gap-x-2">
                      <p className="text-main_gray hover:text-main_text_color">
                        Cerrar
                      </p>
                      <img
                        className="rotate-180"
                        src={DropIcon}
                        alt="drop-icon"
                      />
                    </div>
                  ) : (
                    <div className="mb-2 flex gap-x-2">
                      <p className="text-main_gray hover:text-main_text_color">
                        Ver {additionalProblemCount} problemas
                      </p>
                      <img src={DropIcon} alt="drop-icon" />
                    </div>
                  )}
                </p>
              </button>
            )}
          </div>
        )}
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
