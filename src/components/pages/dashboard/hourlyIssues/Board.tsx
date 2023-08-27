import { useEffect } from 'react';

import { RootState, useAppDispatch } from '@app/store';
import { getHoursXHours } from '@redux/thunks/hourperhourThunk';
import { useSelector } from 'react-redux';

import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';
import ShiftTab from './modules/ShiftTab';

function Board() {
  const dispatch = useAppDispatch();
  /* const { data, loading, error } = useSelector(
    (state: RootState) => state.hourxhourReducer,
  ); */

  const shiftA = {
    '06:00': '6:00 - 7:00',
    '07:00': '7:00 - 8:00',
    '08:00': '8:00 - 9:00',
    '09:00': '9:00 - 10:00',
    '10:00': '10:00 - 11:00',
    '11:00': '11:00 - 12:00',
    '12:00': '12:00 - 13:00',
    '13:00': '13:00 - 14:00',
  };

  const shiftB = {
    '14:00': '14:00 - 15:00',
    '15:00': '15:00 - 16:00',
    '16:00': '16:00 - 17:00',
    '17:00': '17:00 - 18:00',
    '18:00': '18:00 - 19:00',
    '19:00': '19:00 - 20:00',
    '20:00': '20:00 - 21:00',
    '21:00': '21:00 - 22:00',
  };

  const shiftC = {
    '22:00': '22:00 - 23 :00',
    '23:00': '23:00 - 24:00',
    '24:00': '24:00 - 01:00',
    '01:00': '01:00 - 02:00',
    '02:00': '02:00 - 03:00',
    '03:00': '03:00 - 04:00',
    '04:00': '04:00 - 05:00',
    '05:00': '05:00 - 06:00',
  };

  useEffect(() => {
    dispatch(getHoursXHours());
  }, [dispatch]);

  return (
    <div className="h-full grid grid-rows-[7] ">
      <div className="row-span-1 border-t border-main_color">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto row-span-6 hide-scrollbar">
        <ShiftTab shift="Turno A" />
        {/* {Object.values(shiftA).map((hour: string) => {
          return (
            <RowBoard
              key={}
              must={}
              is={}
              isAccumulative={}
              mustAccumulative={}
              difference={}
              accumulativeDifference={}
              date={}
              idCell={}
              idUser={}
              issues={}
              hour={hour}
            />
          );
        })} */}

        <ShiftTab shift="Turno B" />
        {/* {Object.values(shiftB).map((hour: string) => {
          return <RowBoard hour={hour} problems={problemsArray} />;
        })} */}

        <ShiftTab shift="Turno C" />
        {/* {Object.values(shiftC).map((hour: string) => {
          return <RowBoard hour={hour} />;
        })} */}
      </div>
    </div>
  );
}

export default Board;
