import ArrowDown from '@assets/icons/arrow-down.svg';
import ArrowGrowth from '@assets/icons/arrow-growth.svg';

type CardStatisticsProps = {
  type: string;
  quantity?: number;
  problem?: string;
  percentage: number;
};

export default function CardStatistics({
  type,
  quantity,
  problem,
  percentage,
}: CardStatisticsProps) {
  return (
    <div className="border border-main_color rounded-xl bg-main_white h-28 flex flex-col">
      <div className="flex-1 flex flex-col justify-center ">
        <div className="ml-6">
          <p className="text-main_gray text-xs"> {type} </p>
          {problem === undefined ? (
            <p className="text-main_title_color text-xl">
              {quantity} problemas
            </p>
          ) : (
            <p className="text-main_title_color text-xl">{problem}</p>
          )}
        </div>
      </div>
      <div className="bg-main_blue_bg flex justify-center items-center gap-x-2 rounded-b-xl py-2">
        {Number(percentage) < 0 ? (
          <div className="flex gap-x-2">
            <img src={ArrowDown} alt="arrow-down" />
            <p className="text-main_green">{percentage}%</p>
          </div>
        ) : (
          <div className="flex gap-x-2">
            <img src={ArrowGrowth} alt="arrow-down" />
            <p className="text-main_red">{percentage}%</p>
          </div>
        )}
        <p className="text-main_gray text-xs">Último mes</p>
      </div>
    </div>
  );
}

CardStatistics.defaultProps = {
  problem: undefined,
  quantity: undefined,
};
