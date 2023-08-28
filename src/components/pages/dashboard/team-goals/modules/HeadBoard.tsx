import CellBoard from './CellBoard';
import CellTab from './CellTab';

export type HeadBoardProps = {
  days: number;
};

export default function HeadBoard({ days }: HeadBoardProps) {
  return (
    <div>
      <div
        className={`grid grid-cols-${days} border-b border-main_color h-full`}
      >
        <CellBoard title="Hora" />
      </div>
    </div>
  );
}
