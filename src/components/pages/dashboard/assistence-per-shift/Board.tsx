import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';
const shifts = [
  { title: '1ER TURNO' },
  { title: '2DO TURNO' },
  { title: '3ER TURNO' },
];

export default function Board() {
  return (
    <div className="grid grid-rows-6">
      <div className="row-span-2">
        <HeadBoard />
      </div>
      <div className="row-span-4">
        {shifts.map((shiftTitle) => (
          <RowBoard shift={shiftTitle.title} />
        ))}
      </div>
    </div>
  );
}
