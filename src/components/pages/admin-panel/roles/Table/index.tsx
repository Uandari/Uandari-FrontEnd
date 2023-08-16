import HeadTitle from './Boards/BoardPieces/HeadTitle';
import RowBoard from './Boards/BoardPieces/RowBoard';

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

  const user2 = {
    _14: '14:00 - 15:00',
    _15: '15:00 - 16:00',
    _16: '16:00 - 17:00',
    _17: '17:00 - 18:00',
    _18: '18:00 - 19:00',
    _19: '19:00 - 20:00',
    _20: '20:00 - 21:00',
    _21: '21:00 - 22:00',
  };

  const user3 = {
    _22: '22:00 - 23:00',
    _23: '23:00 - 24:00',
    _24: '24:00 - 01:00',
    _01: '01:00 - 02:00',
    _02: '02:00 - 03:00',
    _03: '03:00 - 04:00',
    _04: '04:00 - 05:00',
    _05: '05:00 - 06:00',
  };

  return (
    <div className="h-full grid grid-rows-[7] ">
      <div className="row-span-1">
        <HeadTitle />
      </div>
      <div className="overflow-y-auto row-span-6 hide-scrollbar">

        {Object.values(user1).map((hour: string) => {
          return <RowBoard userName='sadsa' userImage='safsa' userRole='sada' controlNumber='numero de control' line='linea' celule='celula' operation='operacion' turn='turno' />;
        })}
      </div>
    </div>
  );
}

export default Table;
