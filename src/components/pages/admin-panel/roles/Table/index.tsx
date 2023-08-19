import HeadBoard from './Boards/BoardPieces/HeadBoard.tsx';
import RowBoard from './Boards/BoardPieces/RowBoard';
import ShiftTab from './Boards/BoardPieces/ShiftTab.tsx';

function Table() {
  const user1 = {
    _06: '6:00 - 7:00',
    _07: '7:00 - 8:00',
    _08: '8:00 - 9:00',
    _09: '9:00 - 10:00',
    _10: '10:00 - 11:00',
    _11: '11:00 - 12:00',
    _12: '12:00 - 13:00',
    _13: '13:00 - 14:00',
  };

  return (
    <div className="h-full grid grid-rows-[7] ">
      <ShiftTab/>
      <div className="row-span-1">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto row-span-6 hide-scrollbar">
        {Object.values(user1).map((hour: string) => {
          return <RowBoard roleName='Administrador'/>;
        })}
      </div>
    </div>
  );
}

export default Table;
