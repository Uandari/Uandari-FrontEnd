export type RowBoardProps = {
  shift: string;
};

export default function RowBoard({ shift }: RowBoardProps) {
  return (
    <div className="border-b border-main_color ">
      <div className="grid grid-cols-6 grid-rows-3">
        <div className="row-span-2  border-r text-center font-medium text-main_title_color">
          {shift}
        </div>
        <div className="grid grid-rows-2 col-span-5 h-full">
          <div className="grid grid-cols-5 h-full">
            <div className="border-r border-b text-center font-medium text-main_title_color">
              Debe
            </div>
            <div className=" border-r font-medium text-main_gray border-b text-center ">
              19
            </div>
            <div className=" border-r font-medium text-main_gray border-b text-center">
              21
            </div>
            <div className=" border-r font-medium text-main_gray border-b text-center ">
              23
            </div>
            <div className=" border-r font-medium text-main_gray border-b text-center">
              25
            </div>
          </div>
          <div className="grid grid-cols-5">
            <div className=" border-r text-center font-medium text-main_title_color">
              Es
            </div>
            <div className=" border-r font-medium text-main_gray text-center ">
              20
            </div>
            <div className=" border-r  font-medium text-main_gray text-center ">
              22
            </div>
            <div className=" border-r  font-medium text-main_gray text-center">
              24
            </div>
            <div className=" border-r font-medium text-main_gray text-center ">
              25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
