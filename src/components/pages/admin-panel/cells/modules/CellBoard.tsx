export type CellBoardTypes = {
  title: string;
  colSpan?: string;
};

function CellBoard({ title, colSpan }: CellBoardTypes) {
  return (
    <div className={`text-main_text_color ${colSpan} text-sm  px-24 py-2`}>
      <p> {title} </p>
    </div>
  );
}

CellBoard.defaultProps = {
  colSpan: '',
};
export default CellBoard;
