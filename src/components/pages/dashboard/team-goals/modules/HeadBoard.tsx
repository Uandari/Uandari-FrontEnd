import CellBoard from './CellBoard';

export type HeadBoardProps = {
  days: number;
};

export default function HeadBoard({ days }: HeadBoardProps) {
  const cellBoards = [];

  for (let i = 0; i < days; i++) {
    cellBoards.push(
      <CellBoard key={i} title={String(i + 1)} />
    );
  }

  return (
    <div>
      <div className={`flex border-main_color justify-end`}>
        <div className='w-3'></div>
        <div className='flex justify-start w-auto'>
          {cellBoards}
        </div>
      </div>
    </div>
  );
}
