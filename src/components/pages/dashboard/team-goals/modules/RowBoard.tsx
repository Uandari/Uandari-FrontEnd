import ColorChangingBox from "./Tabs/ColorChangingBox";

export type RowBoardProps = {
  month: string;
  days: number;
};

export default function RowBoard({ month, days }: RowBoardProps) {
  const cellBoards = [];

  for (let i = 0; i < days + 1; i++) {
    cellBoards.push(
      <ColorChangingBox key={i}></ColorChangingBox>
    );
  }

  return (
    <div className="border-b border-main_color ">
      <div className="flex  grid-cols-4 ">
        <div className="flex ">

          <div className="border-r text-center  w-14  border-t flex items-center">
            <div style={{ transform: 'rotate(-90deg)', width: '60px' }} className="text-center p-0">{month}</div>
          </div>
          <div className="col-span-2">

            <p className="p-2  w-72 border-t">Seguridad</p>
            <p className="p-2 w-72  border-t">Volúmen de producción programada</p>
            <p className="p-2  w-72  border-t">Fallas B</p>
            <p className="p-2  w-72  border-t">Fallas C</p>
            <p className="p-2  w-72  border-t">Material Dañado</p>
          </div>
        </div>
        <div className={` flex-grow grid `}>
          <div className="flex  justify-between">
            {cellBoards}
          </div>
          <div className="flex ">
            {cellBoards}
          </div>
          <div className="flex ">
            {cellBoards}
          </div>
          <div className="flex ">
            {cellBoards}
          </div>
          <div className="flex ">
            {cellBoards}
          </div>
        </div>
      </div>
    </div>
  );
}
