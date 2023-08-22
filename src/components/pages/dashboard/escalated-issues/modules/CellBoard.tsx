export type CellBoardTypes = {
  title: string;
  colSpan?: string;
};

export default function CellBoard({ title, colSpan }: CellBoardTypes) {
  return (
    <div
      className={`text-main_text_color ${colSpan} text-sm text-center flex items-center justify-center py-2`}
    >
      <p>{title}</p>
    </div>
  );
}

CellBoard.defaultProps = {
  colSpan: '',
};
