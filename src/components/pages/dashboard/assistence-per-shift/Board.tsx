
import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';
const shifts = [
  { title: '1ER TURNO' },
  { title: '2DO TURNO' },
  { title: '3ER TURNO' },
];

export default function Board() {

  return (
    

    <div className="">
            <div className="h-36"><HeadBoard /></div>
        <div className="">{shifts.map((shiftTitle) => (
              <RowBoard shift={shiftTitle.title} />
          ))}
    </div>
    </div>
    
      );
}