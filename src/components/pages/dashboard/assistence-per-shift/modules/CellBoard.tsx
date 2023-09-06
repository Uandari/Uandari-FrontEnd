export type CellBoardTypes = {
  title: string;
  colSpan?: string;
};

function CellBoard({ title, colSpan }: CellBoardTypes) {
  return (
    <div
      className={`font-medium text-main_title_color col-span-${colSpan} text-center flex items-center justify-center  border-main_color`}
    >
      <p> {title} </p>
    </div>
  );
}

CellBoard.defaultProps = {
  colSpan: '',
};
export default CellBoard;
