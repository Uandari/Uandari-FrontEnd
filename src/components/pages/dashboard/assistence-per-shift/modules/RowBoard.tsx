
export type RowBoardProps = {
  shift: string;
};

export default function RowBoard({ shift }: RowBoardProps) {
  return (
    <div className="border-b border-main_color ">
      <div className="grid grid-cols-6 grid-rows-7 ">
        <div className="col-span-6 ">
          <div className="grid grid-cols-6 grid-rows-7 ">
            <div className="row-span-2  border-r text-center p-4 ">{shift}</div>
            <div className="border-r border-b text-center p-4">Debe</div>
            <div className=" border-r text-center p-4">Es</div>
            <div className="col-start-3 row-start-1 border-r  border-b text-center p-4">19</div>
            <div className="col-start-3 row-start-2 border-r text-center p-4">20</div>
            <div className="col-start-4 row-start-1 border-r  border-b text-center p-4">21</div>
            <div className="col-start-4 row-start-2 border-r   text-center p-4">22</div>
            <div className="col-start-5 row-start-1 border-r  border-b text-center p-4">23</div>
            <div className="col-start-5 row-start-2 border-r   text-center p-4">24</div>
            <div className="col-start-6 row-start-1 border-r  border-b text-center p-4">25</div>
            <div className="col-start-6 row-start-2 border-r  text-center p-4">25</div>
          </div>
        </div>
      </div>
    </div>
  )
}
