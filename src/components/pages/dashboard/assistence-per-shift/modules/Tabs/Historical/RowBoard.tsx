export type RowBoardProps = {
  day: string;
  presentMust: number;
  presentIs: number;
  absentMust: number;
  absentIs: number;
  borrowedMust: number;
  borrowedIs: number;
  trainingMust: number;
  trainingIs: number;
};

function RowBoard({
  day,
  presentMust,
  presentIs,
  absentMust,
  absentIs,
  borrowedMust,
  borrowedIs,
  trainingMust,
  trainingIs,
}: RowBoardProps) {
  return (
    <div className="grid grid-cols-5 border-b border-main_color h-16 ">
      <div className="flex items-center justify-center  text-center text-main_text_color">
        {day}
      </div>
      <div className="flex items-center justify-center text-center ">
        <div>
          <div className="flex items-center font-medium">
            <p className="mr-2 text-main_gray font-normal">Debe</p>
            {presentMust}
          </div>
          <div className="flex items-center font-medium">
            <p className="mr-2 text-main_gray font-normal">Es</p>
            {presentIs}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center ">
        <div>
          <div className="flex items-center font-medium">
            <p className="mr-2 text-main_gray font-normal">Debe</p>
            {presentMust}
          </div>
          <div className="flex items-center font-medium">
            <p className="mr-2 text-main_gray font-normal">Es</p>
            {presentIs}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center ">
        <div>
          <div className="flex items-center font-medium">
            <p className="mr-2 text-main_gray font-normal">Debe</p>
            {presentMust}
          </div>
          <div className="flex items-center font-medium">
            <p className="mr-2 text-main_gray font-normal">Es</p>
            {presentIs}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center ">
        <div>
          <div className="flex items-center font-medium">
            <p className="mr-2 text-main_gray font-normal">Debe</p>
            {presentMust}
          </div>
          <div className="flex items-center font-medium">
            <p className="mr-2 text-main_gray font-normal">Es</p>
            {presentIs}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowBoard;
