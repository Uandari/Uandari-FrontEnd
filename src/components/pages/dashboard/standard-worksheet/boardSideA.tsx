import HeadBoard from './modules/boardSideA/HeadBoard';

export type BoardProps = {
  children: React.ReactNode;
};

export default function Board({ children }: BoardProps) {
  return (
    <div className="h-full">
        <HeadBoard />
      <div className="overflow-y-auto hide-scrollbar" style={{ maxHeight: '70vh' }}>
        {children}
      </div>
    </div>
  );
}
