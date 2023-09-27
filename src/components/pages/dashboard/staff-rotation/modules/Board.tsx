import HeadBoard from './HeadBoard';
export type BoardProps = {
  children: React.ReactNode;
};
export default function Board({ children }: BoardProps) {
  return (
    <div>
      <div className="border-main_color">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto" >
        {children}
      </div>
    </div>
  );
}
