import { HourxHourCardMock } from '@mocks/HourxHourCard';

import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';

function Board() {
  // Arreglo de horas a representar
  const hoursToRender = [
    { shortHour: '06:00', completeHour: '6:00 - 7:00' },
    { shortHour: '07:00', completeHour: '7:00 - 8:00' },
    { shortHour: '08:00', completeHour: '8:00 - 9:00' },
    { shortHour: '09:00', completeHour: '9:00 - 10:00' },
    { shortHour: '10:00', completeHour: '10:00 - 11:00' },
    { shortHour: '11:00', completeHour: '11:00 - 12:00' },
    { shortHour: '12:00', completeHour: '12:00 - 13:00' },
    { shortHour: '13:00', completeHour: '13:00 - 14:00' },
    { shortHour: '14:00', completeHour: '14:00 - 15:00' },
    { shortHour: '15:00', completeHour: '15:00 - 16:00' },
    { shortHour: '16:00', completeHour: '16:00 - 17:00' },
    { shortHour: '17:00', completeHour: '17:00 - 18:00' },
    { shortHour: '18:00', completeHour: '18:00 - 19:00' },
    { shortHour: '19:00', completeHour: '19:00 - 20:00' },
    { shortHour: '20:00', completeHour: '20:00 - 21:00' },
    { shortHour: '21:00', completeHour: '21:00 - 22:00' },
    { shortHour: '22:00', completeHour: '22:00 - 23:00' },
    { shortHour: '23:00', completeHour: '23:00 - 24:00' },
    { shortHour: '24:00', completeHour: '24:00 - 01:00' },
    { shortHour: '01:00', completeHour: '01:00 - 02:00' },
    { shortHour: '02:00', completeHour: '02:00 - 03:00' },
    { shortHour: '03:00', completeHour: '03:00 - 04:00' },
    { shortHour: '04:00', completeHour: '04:00 - 05:00' },
    { shortHour: '05:00', completeHour: '05:00 - 06:00' },
  ];

  return (
    <div className="h-full grid grid-rows-[7] ">
      <div className="row-span-1 border-t border-main_color">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto row-span-6 hide-scrollbar">
        {hoursToRender.map(({ shortHour, completeHour }) => {
          // Busca el objeto correspondiente en el mock
          const hourxHourData = HourxHourCardMock.find(
            (item) => item.hour === shortHour,
          );

          // Renderiza RowBoard si se encuentra el objeto, de lo contrario, muestra contenido vacío
          return (
            <div key={shortHour}>
              {hourxHourData ? (
                <RowBoard
                  completeHour={completeHour} // Pasa la hora completa
                  must={hourxHourData.must}
                  is={hourxHourData.is}
                  isAccumulative={hourxHourData.isAccumulative}
                  mustAccumulative={hourxHourData.mustAccumulative}
                  difference={hourxHourData.difference}
                  accumulativeDifference={hourxHourData.accumulativeDifference}
                  date={hourxHourData.date}
                  idCell={hourxHourData.idCell}
                  idUser={hourxHourData.idUser}
                  issues={hourxHourData.issues}
                  hour={shortHour}
                />
              ) : (
                // Puedes mostrar contenido vacío o lo que desees aquí
                <div key={shortHour}>
                  <RowBoard completeHour={completeHour} />
                </div>
              )}
            </div>
          );
        })}

        {/* <ShiftTab shift="Turno A" />
        {Object.values(shiftA).map((hour: string) => {
          return HourxHourCardMock.map((item, index) => <p>item {index} </p>);
        })} */}

        {/* <ShiftTab shift="Turno B" />
        {Object.values(shiftB).map((hour: string) => {
          const hourxHourData = HourxHourCardMock.find(
            (item) => item.hour === hour,
          );

          return (
            hourxHourData && (
              <RowBoard
                key={hour}
                must={hourxHourData.must}
                is={hourxHourData.is}
                isAccumulative={hourxHourData.isAccumulative}
                mustAccumulative={hourxHourData.mustAccumulative}
                difference={hourxHourData.difference}
                accumulativeDifference={hourxHourData.accumulativeDifference}
                date={hourxHourData.date}
                idCell={hourxHourData.idCell}
                idUser={hourxHourData.idUser}
                issues={hourxHourData.issues}
                hour={hour}
              />
            )
          );
        })} */}

        {/* <ShiftTab shift="Turno C" />
        {Object.values(shiftC).map((hour: string) => {
          const hourxHourData = HourxHourCardMock.find(
            (item) => item.hour === hour,
          );

          return (
            hourxHourData && (
              <RowBoard
                key={hour}
                must={hourxHourData.must}
                is={hourxHourData.is}
                isAccumulative={hourxHourData.isAccumulative}
                mustAccumulative={hourxHourData.mustAccumulative}
                difference={hourxHourData.difference}
                accumulativeDifference={hourxHourData.accumulativeDifference}
                date={hourxHourData.date}
                idCell={hourxHourData.idCell}
                idUser={hourxHourData.idUser}
                issues={hourxHourData.issues}
                hour={hour}
              />
            )
          );
        })} */}
      </div>
    </div>
  );
}

export default Board;
