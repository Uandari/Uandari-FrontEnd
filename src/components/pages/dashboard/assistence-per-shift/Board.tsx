
import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';
const shifts = [
  { title: '1ER TURNO' },
  { title: '2DO TURNO' },
  { title: '3ER TURNO' },
];

export default function Board() {

  return (
    

<div className="grid grid-cols-6 grid-rows-2 g">
        <div className="col-span-6"><HeadBoard /></div>
    <div className="col-span-6 row-start-2">{shifts.map((shiftTitle) => (
        <div>
          <RowBoard shift={shiftTitle.title} />
        </div>
      ))}
</div>
</div>

  );
}