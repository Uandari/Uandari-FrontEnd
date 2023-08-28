export type RowBoardProps = {
  month: string;
  days: number;
};

export default function RowBoard({ month, days }: RowBoardProps) {
  return (
    <div className="grid grid-cols-9 border-b border-main_color">
      {/* Hora */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        sfa
      </div>
      {/* Es */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color ">
        afsaf
      </div>
      {/* Debe */}
      <div className="flex items-center justify-center text-main_text_color border-r border-main_color">
        sfa
      </div>
      {/* Es acumulado */}
      <div className="flex items-center justify-center text-main_gray border-r border-main_color">
        sfa
      </div>
    </div>
  );
}
