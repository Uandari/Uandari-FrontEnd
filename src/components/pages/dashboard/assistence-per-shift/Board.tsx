
import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';

const shifts = [
  { title: '1ER TURNO' },
  { title: '2DO TURNO' },
  { title: '3ER TURNO' },
];

export default function Board() {

  return (
    <div className="h-full grid ">
        <HeadBoard />
      <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>{shifts.map((shiftTitle) => (
        <div>
          <RowBoard shift={shiftTitle.title} />
        </div>
      ))}

      </div>
    </div>

  );
}