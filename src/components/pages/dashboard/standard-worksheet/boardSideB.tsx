import HeadBoard from './modules/boardSideB/HeadBoard';

export type BoardProps = {
  children: React.ReactNode;
};

export default function Board({ children }: BoardProps) {
  return (
    <div className="h-full grid grid-rows-[8]">
      <div className="row-span-1">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
        {children}
      </div>
    </div>
  );
}
