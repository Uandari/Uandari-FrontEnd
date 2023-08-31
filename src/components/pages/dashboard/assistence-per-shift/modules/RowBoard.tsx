screenTop
export type RowBoardProps = {
  shift: string;
};

export default function RowBoard({ shift }: RowBoardProps) {
  return (
    <div className="border-b border-main_color ">
      <div className="grid  grid-cols-6 ">
        <div className="border-r  p-5 ">{shift}
        </div>
        <div className="grid grid-cols-6 border-b border-main_color h-full">
          <div>

            <div className="border-r border-b justfyce ">Debe
            </div>
            <div className="border-r ">Es
            </div>
          </div>
          <div className="text-sm text-center flex items-center justify-center  border-main_color py-2 px-3">
            <p>Presente</p>
            <p>Ausentess</p>
            <p>Prestados</p>
            <p>Capacitacion</p>
          </div>

        </div>
      </div>
    </div>
  )
}
