import { useEffect, useState } from 'react';

export type MonthDetailsProps = {
  month: string;
  weekOne: number;
  weekTwo: number;
  weekThree: number;
  weekFour: number;
};

function MonthDetails({
  month,
  weekOne,
  weekTwo,
  weekThree,
  weekFour,
}: MonthDetailsProps) {
  const [totalValue, setTotalValue] = useState<number>(0);
  const [weekOneValue, setWeekOneValue] = useState<number>(weekOne ?? 0);
  const [weekTwoValue, setWeekTwoValue] = useState<number>(weekTwo ?? 0);
  const [weekThreeValue, setWeekThreeValue] = useState<number>(weekThree ?? 0);
  const [weekFourValue, setWeekFourValue] = useState<number>(weekFour ?? 0);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/[eE]/.test(value)) {
      return; // Do not update the state when press e
    }
    switch (name) {
      case 'weekOne':
        setWeekOneValue(Number(value));
        break;
      case 'weekTwo':
        setWeekTwoValue(Number(value));
        break;
      case 'weekThree':
        setWeekThreeValue(Number(value));
        break;
      case 'weekFour':
        setWeekFourValue(Number(value));
        break;
      default:
        break;
    }
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  useEffect(() => {
    setTotalValue(weekOneValue + weekTwoValue + weekThreeValue + weekFourValue);
  }, [weekFourValue, weekOneValue, weekThreeValue, weekTwoValue]);

  return (
    <div className="px-6 gap-x-4 border-b border-main_color py-6">
      <div>
        <h4 className="font-medium text-lg text-main_title_color"> {month} </h4>
        <p className="text-main_text_color">
          <b>Meta </b>
          {totalValue} motores
        </p>
      </div>
      <div className="grid grid-cols-2 pt-3 gap-x-4">
        <div className="flex flex-col gap-y-3">
          <div>
            <p className="text-sm text-main_text_color">Semana 1</p>
            <input
              min={0}
              name="weekOne"
              value={weekOneValue}
              onChange={(e) => handleChangeInput(e)}
              onClick={(e) => handleInputClick(e)}
              type="number"
              placeholder="Meta de la semana"
              className="outline-none border w-full border-main_color px-3 py-1 rounded-md"
            />
          </div>
          <div>
            <p className="text-sm text-main_text_color">Semana 2</p>
            <input
              min={0}
              name="weekTwo"
              value={weekTwoValue}
              onChange={(e) => handleChangeInput(e)}
              onClick={(e) => handleInputClick(e)}
              type="number"
              placeholder="Meta de la semana"
              className="outline-none border w-full border-main_color px-3 py-1 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <div>
            <p className="text-sm text-main_text_color">Semana 3</p>
            <input
              min={0}
              name="weekThree"
              value={weekThreeValue}
              onChange={(e) => handleChangeInput(e)}
              onClick={(e) => handleInputClick(e)}
              type="number"
              placeholder="Meta de la semana"
              className="outline-none border w-full border-main_color px-3 py-1 rounded-md"
            />
          </div>
          <div>
            <p className="text-sm text-main_text_color">Semana 4</p>
            <input
              min={0}
              name="weekFour"
              value={weekFourValue}
              onChange={(e) => handleChangeInput(e)}
              onClick={(e) => handleInputClick(e)}
              type="number"
              placeholder="Meta de la semana"
              className="outline-none border w-full border-main_color px-3 py-1 rounded-md"
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-main_blue_dark px-6 py-1 rounded-md text-white mt-3"
      >
        Guardar
      </button>
    </div>
  );
}

export default MonthDetails;
