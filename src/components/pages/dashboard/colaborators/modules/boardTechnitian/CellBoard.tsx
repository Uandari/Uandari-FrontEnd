export type CellBoardTypes = {
  title: string;
  colSpan?: string;
};

function CellBoard({ title, colSpan }: CellBoardTypes) {
  return (
    <div
      className={`col-span-${colSpan} font-medium text-main_gray text-sm text-center flex items-center justify-center `}
    >
      <p> {title} </p>
    </div>
  );
}

CellBoard.defaultProps = {
  colSpan: '',
};
export default CellBoard;
