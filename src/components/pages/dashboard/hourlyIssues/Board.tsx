import { hoursToRender } from '@commons/enums';
import { HourxHourCardMock } from '@mocks/HourxHourCard';

import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';

function Board() {
  return (
    <div className="h-full grid grid-rows-[7] ">
      <div className="row-span-1 border-main_color">
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
      </div>
    </div>
  );
}

export default Board;
