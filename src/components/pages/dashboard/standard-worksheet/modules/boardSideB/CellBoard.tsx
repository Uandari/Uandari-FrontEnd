export type CellBoardTypes = {
  title: string;
  colSpan?: string;
};

function CellBoard({ title, colSpan }: CellBoardTypes) {
  return (
    <div
      className={`text-main_text_color ${colSpan} text-sm text-center flex  justify-center pb-4 items-center `}
    >
      <p> {title} </p>
    </div>
  );
}

CellBoard.defaultProps = {
  colSpan: '',
};
export default CellBoard;
