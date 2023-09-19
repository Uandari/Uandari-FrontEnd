import React, { useEffect, useState } from 'react';

import DropIcon from '@icons/dropIcon.svg';
import PlusIcon from '@icons/plus.svg';
import { areas } from '@mocks/Areas';
import { operations } from '@mocks/Operations';
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
  operation?: string;
  time?: number;
  area?: string;
};

export type IssuesCardProps = {
  idhourxhourIssue: number;
  description: string;
  type: IssuesType;
};

export type IssuesType = {
  name: string;
};

export type ItemProps = {
  id: number;
  name: string;
};

type SearchableItem = {
  id: number;
  name: string;
};

type SearchFunctionProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  items: SearchableItem[];
  setFilteredItems: React.Dispatch<React.SetStateAction<SearchableItem[]>>;
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
  operation,
  area,
  time,
}: RowBoardProps) {
  // Problems states
  const [showAllProblems, setShowAllProblems] = useState(false);
  const [countedIssues, setCountedIssues] = useState(0);

  // State values of inputs
  const [isValue, setIsValue] = useState<number | null>(is ?? null);
  const [mustValue, setMustValue] = useState<number | null>(must ?? null);
  const [timeValue, setTimeValue] = useState<number | null>(time ?? null);
  const [areaValue, setAreaValue] = useState<string | null>(area ?? null);
  const [operationValue, setOperationValue] = useState<string | null>(
    operation ?? null,
  );

  // Estado para el input enfocado y su nombre
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // State values for search operations
  const [searchOperationTerm, setSearchOperationTerm] = useState('');
  const [filteredOperations, setFilteredOperations] = useState(operations);

  const [searchAreaTerm, setSearchAreasTerm] = useState('');
  const [filteredAreas, setFilteredAreas] = useState(areas);

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    e.currentTarget.select();
    setFocusedInput(inputName);
  };

  const handleSearchChangeOperations = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const newSearchTerm = e.target.value;
    setSearchOperationTerm(newSearchTerm);

    // Filter operations based on search terms
    const filtered = operations.filter((operationName) =>
      operationName.name.toLowerCase().includes(newSearchTerm.toLowerCase()),
    );

    setFilteredOperations(filtered);
  };

  const handleSearchChangeAreas = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const newSearchTerm = e.target.value;
    setSearchAreasTerm(newSearchTerm);

    // Filter operations based on search terms
    const filtered = areas.filter((areasName) =>
      areasName.name.toLowerCase().includes(newSearchTerm.toLowerCase()),
    );

    setFilteredAreas(filtered);
  };

  const handleSearchChange =
    ({ setSearchTerm, items, setFilteredItems }: SearchFunctionProps) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const newSearchTerm = e.target.value;
      setSearchTerm(newSearchTerm);

      // Filter items based on search terms
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(newSearchTerm.toLowerCase()),
      );

      setFilteredItems(filtered);
    };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const handleItemSelected = (type: 'area' | 'operation', item: ItemProps) => {
    switch (type) {
      case 'area':
        setAreaValue(item.name);
        break;
      case 'operation':
        setOperationValue(item.name);
        break;
      default:
        break;
    }
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      window.getSelection()?.removeAllRanges();
      setFocusedInput(null);

      const inputName = e.currentTarget.name;
      switch (inputName) {
        case 'must':
          /* Call endpoint */
          break;
        case 'is':
          /* Call endpoint */
          break;
        case 'time':
          /* Call endpoint */
          break;
        default:
          break;
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (/[eE]/.test(value)) {
      return; // Do not update the state
    }

    if (name === 'is') {
      setIsValue(Number(value));
    } else if (name === 'must') {
      setMustValue(Number(value));
    } else if (name === 'time') {
      setTimeValue(Number(value));
    }
  };

  useEffect(() => {
    /* Hide all the problem list */
    if (issues) {
      setCountedIssues(issues.length - 1);
    }
  }, [issues]);

  return (
    <div className="grid grid-cols-12 border-b border-main_color">
      {/* Hora */}
      <div className="flex items-center text-center justify-center text-main_gray border-r border-main_color">
        <p className="py-6">{completeHour}</p>
      </div>
      {/* Operación */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color relative">
        <p className="absolute">{operationValue}</p>
        <Popover
          placement="right"
          trigger="click"
          content={
            <div className="flex flex-col items-start h-32 overflow-y-scroll">
              <input
                type="text"
                placeholder="Buscar operación"
                value={searchOperationTerm}
                onChange={handleSearchChange({
                  items: operations,
                  setSearchTerm: setSearchOperationTerm,
                  setFilteredItems: setFilteredOperations,
                })}
                className="outline-none mb-1"
              />
              {filteredOperations.map((item) => (
                <button
                  type="button"
                  className="hover:bg-main_blue_bg text-left w-full p-1 rounded-md pl-2"
                  key={item.id}
                  onClick={() => handleItemSelected('operation', item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          }
        >
          <button type="button" className="text-transparent h-full w-full z-10">
            btn
          </button>
        </Popover>
      </div>

      {/* Tiempo de paro */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color">
        <input
          className={`w-full h-full border-none text-center outline-none text-lg cursor-pointer ${
            focusedInput === 'time' ? 'input-focused' : ''
          }`}
          type="number"
          value={timeValue !== null ? timeValue.toString() : ''}
          name="time"
          onChange={(e) => handleInputChange(e)}
          onClick={(e) => handleInputClick(e)}
          onBlur={handleInputBlur}
          onKeyPress={(e) => handleInputKeyPress(e)}
        />
      </div>
      {/* Área responsable */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color">
        <p className="absolute">{areaValue}</p>
        <Popover
          placement="right"
          trigger="click"
          content={
            <div className="flex flex-col items-start h-32 overflow-y-scroll">
              <input
                type="text"
                placeholder="Buscar área"
                value={searchAreaTerm}
                onChange={handleSearchChange({
                  items: areas,
                  setSearchTerm: setSearchAreasTerm,
                  setFilteredItems: setFilteredAreas,
                })}
                className="outline-none mb-1"
              />
              {filteredAreas.map((item) => (
                <button
                  type="button"
                  className="hover:bg-main_blue_bg text-left w-full p-1 rounded-md pl-2"
                  key={item.id}
                  onClick={() => handleItemSelected('area', item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          }
        >
          <button type="button" className="text-transparent h-full w-full z-10">
            btn
          </button>
        </Popover>
      </div>
      {/* Es */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color ">
        <input
          className={`w-full h-full border-none text-center outline-none text-lg cursor-pointer ${
            focusedInput === 'is' ? 'input-focused' : ''
          }`}
          type="number"
          value={isValue !== null ? isValue.toString() : ''}
          name="is"
          onChange={(e) => handleInputChange(e)}
          onClick={(e) => handleInputClick(e)}
          onBlur={handleInputBlur}
          onKeyPress={(e) => handleInputKeyPress(e)}
        />
      </div>
      {/* Debe */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color">
        <input
          className={`w-full h-full border-none text-center outline-none text-lg cursor-pointer ${
            focusedInput === 'must' ? 'input-focused' : ''
          }`}
          type="number"
          value={mustValue !== null ? mustValue?.toString() : ''}
          name="must"
          onChange={(e) => handleInputChange(e)}
          onClick={(e) => handleInputClick(e)}
          onBlur={handleInputBlur}
          onKeyPress={(e) => handleInputKeyPress(e)}
        />
      </div>
      {/* Es acumulado */}
      <p className="flex items-center justify-center text-main_gray border-r border-main_color">
        {isAccumulative}
      </p>
      {/* Debe acumulado */}
      <p className="flex items-center justify-center text-main_gray border-r border-main_color">
        {mustAccumulative}
      </p>
      {/* Diferencia */}
      <p className="flex items-center justify-center text-main_gray border-r border-main_color">
        {difference}
      </p>
      {/* Diferencia acumulada */}
      <p className="flex items-center justify-center text-main_gray border-r border-main_color">
        {accumulativeDifference}
      </p>
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
                <div className="text-main_blue text-sm cursor-pointer pl-4">
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
                </div>
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
  operation: null,
  time: null,
  area: null,
};
