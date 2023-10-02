import HeadBoard from './HeadBoard';

export type BoardProps = {
  children: React.ReactNode;
};
export default function Board({ children }: BoardProps) {
  return (
    <div className="h-full  grid grid-rows-[2]">
      <div className="row-span-1  ">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto hide-scrollbar h-full">{children}</div>
    </div>
  );
}
