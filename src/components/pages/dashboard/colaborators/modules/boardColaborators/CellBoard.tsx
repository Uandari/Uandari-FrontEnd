export type CellBoardTypes = {
  title: string;
  colSpan?: string;
};

function CellBoard({ title, colSpan }: CellBoardTypes) {
  return (
    <div
      className={`col-span-${colSpan} pl-12 font-medium text-main_gray`}
    >
      <p> {title} </p>
    </div>
  );
}

CellBoard.defaultProps = {
  colSpan: '',
};
export default CellBoard;
