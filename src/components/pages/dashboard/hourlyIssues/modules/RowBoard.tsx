import { useEffect, useState } from 'react';

import DropIcon from '@icons/dropIcon.svg';
import PlusIcon from '@icons/plus.svg';
import { Popover } from 'antd';

import FormBoard from './FormBoard';
import ProblemCard from './ProblemCard';

export type RowBoardProps = {
  completeHour?: string;
  hour?: string;
  date?: string;
  must?: number;
  mustAccumulative?: number;
  is?: number;
  isAccumulative?: number;
  difference?: number;
  accumulativeDifference?: number;
  idUser?: number;
  idCell?: number;
  issues?: IssuesCardProps[];
};

export type IssuesCardProps = {
  idhourxhourIssue: number;
  description: string;
  type: IssuesType;
};

export type IssuesType = {
  name: string;
};

function RowBoard({
  completeHour,
  hour,
  date,
  must,
  mustAccumulative,
  is,
  isAccumulative,
  difference,
  accumulativeDifference,
  idUser,
  idCell,
  issues,
}: RowBoardProps) {
  const [showAllProblems, setShowAllProblems] = useState(false);
  const [countedIssues, setCountedIssues] = useState(0);
  const [isValue, setIsValue] = useState<number>(is ?? 0);
  const [mustValue, setMustValue] = useState<number>(must ?? 0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === 'is') {
      setIsValue(Number(value));
    } else if (name === 'must') {
      setMustValue(Number(value));
    }
  };

  useEffect(() => {
    /* Hide all the problem list */
    if (issues) {
      setCountedIssues(issues.length - 1);
    }
  }, [issues]);

  return (
    <div className="grid grid-cols-9 border-b border-main_color">
      {/* Hora */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        <div className="py-6">{completeHour}</div>
      </div>
      {/* Es */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color ">
        <input
          className="w-full h-full border-none text-center outline-none text-lg cursor-pointer"
          type="number"
          value={isValue}
          name="is"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      {/* Debe */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color">
        <input
          className="w-full h-full border-none text-center outline-none text-lg cursor-pointer"
          type="number"
          value={mustValue}
          name="must"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      {/* Es acumulado */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {isAccumulative}
      </div>
      {/* Debe acumulado */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {mustAccumulative}
      </div>
      {/* Diferencia */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {difference}
      </div>
      {/* Diferencia acumulada */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        {accumulativeDifference}
      </div>
      {/* Problema */}
      <div className="flex flex-col col-span-2 items-center justify-center pt-4 pb-2">
        {issues && issues.length > 0 && (
          <div>
            <ProblemCard
              key={issues[0].idhourxhourIssue}
              id={issues[0].idhourxhourIssue}
              title={issues[0].type.name}
              description={issues[0].description}
            />
            {showAllProblems &&
              issues
                .slice(1)
                .map((issue) => (
                  <ProblemCard
                    key={issue.idhourxhourIssue}
                    id={issue.idhourxhourIssue}
                    title={issue.type.name}
                    description={issue.description}
                  />
                ))}
            {countedIssues > 0 && (
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
                        Ver {countedIssues} problemas
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
  completeHour: null,
  hour: null,
  date: null,
  must: null,
  mustAccumulative: null,
  is: null,
  isAccumulative: null,
  difference: null,
  accumulativeDifference: null,
  idUser: null,
  idCell: null,
  issues: null,
};
