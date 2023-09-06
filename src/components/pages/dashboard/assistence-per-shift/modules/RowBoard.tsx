
export type RowBoardProps = {
  shift: string;
};

export default function RowBoard({ shift }: RowBoardProps) {
  return (
    <div className="border-b border-main_color ">
      <div className="grid grid-cols-6 grid-rows-7">
        <div className="col-span-6 ">
          <div className="grid grid-cols-6 grid-rows-7">
            <div className="row-span-2  border-r text-center font-medium text-main_title_color">{shift}</div>
            <div className="border-r border-b text-center font-medium text-main_title_color">Debe</div>
            <div className=" border-r text-center font-medium text-main_title_color">Es</div>
            <div className="col-start-3 row-start-1 border-r font-medium text-main_gray border-b text-center ">19</div>
            <div className="col-start-3 row-start-2 border-r font-medium text-main_gray text-center ">20</div>
            <div className="col-start-4 row-start-1 border-r font-medium text-main_gray border-b text-center">21</div>
            <div className="col-start-4 row-start-2 border-r  font-medium text-main_gray text-center ">22</div>
            <div className="col-start-5 row-start-1 border-r font-medium text-main_gray border-b text-center ">23</div>
            <div className="col-start-5 row-start-2 border-r  font-medium text-main_gray text-center">24</div>
            <div className="col-start-6 row-start-1 border-r font-medium text-main_gray border-b text-center">25</div>
            <div className="col-start-6 row-start-2 border-r font-medium text-main_gray text-center ">25</div>
          </div>
        </div>
      </div>
    </div>
  )
}