import { HourXHour } from '@interfaces/HourXHour';

export const HourxHourCardMock: HourXHour[] = [
  {
    idHourxHour: 1,
    hour: '11:00',
    date: '2023/08/26',
    /* 
    idAreas: 1
    idOperation: 3
    downTime: 50
    */
    must: 50,
    mustAccumulative: 20,
    is: 50,
    isAccumulative: 20,
    difference: 20,
    accumulativeDifference: 20,
    idUser: 1,
    idCell: 1,
    issues: [
      {
        idhourxhourIssue: 1,
        description: 'PROBLEMA',
        type: {
          name: 'Averias o fallas de equipos(piezas)',
        },
      },
      {
        idhourxhourIssue: 1,
        description: 'PROBLEMA',
        type: {
          name: 'Averias o fallas de equipos(piezas)',
        },
      },
    ],
  },
  {
    idHourxHour: 2,
    hour: '12:00',
    date: '2023/08/26',
    must: 50,
    mustAccumulative: 20,
    is: 50,
    isAccumulative: 20,
    difference: 20,
    accumulativeDifference: 20,
    idUser: 1,
    idCell: 1,
    issues: [
      {
        idhourxhourIssue: 1,
        description: 'PROBLEMA',
        type: {
          name: 'Averias o fallas de equipos(piezas)',
        },
      },
    ],
  },
  {
    idHourxHour: 3,
    hour: '06:00',
    date: '2023/08/26',
    must: 50,
    mustAccumulative: 20,
    is: 50,
    isAccumulative: 20,
    difference: 20,
    accumulativeDifference: 20,
    idUser: 1,
    idCell: 1,
    issues: [
      {
        idhourxhourIssue: 1,
        description: 'PROBLEMA',
        type: {
          name: 'Averias o fallas de equipos(piezas)',
        },
      },
    ],
  },
  {
    idHourxHour: 4,
    hour: '19:00',
    date: '2023/08/26',
    must: 50,
    mustAccumulative: 20,
    is: 50,
    isAccumulative: 20,
    difference: 20,
    accumulativeDifference: 20,
    idUser: 1,
    idCell: 1,
    issues: [
      {
        idhourxhourIssue: 1,
        description: 'PROBLEMA',
        type: {
          name: 'Averias o fallas de equipos(piezas)',
        },
      },
    ],
  },
  {
    idHourxHour: 5,
    hour: '15:00',
    date: '2023/08/26',
    must: 50,
    mustAccumulative: 20,
    is: 50,
    isAccumulative: 20,
    difference: 20,
    accumulativeDifference: 20,
    idUser: 1,
    idCell: 1,
    issues: [
      {
        idhourxhourIssue: 1,
        description: 'PROBLEMA',
        type: {
          name: 'Averias o fallas de equipos(piezas)',
        },
      },
    ],
  },
  {
    idHourxHour: 6,
    hour: '07:00',
    date: '2023/08/26',
    must: 50,
    mustAccumulative: 20,
    is: 50,
    isAccumulative: 20,
    difference: 20,
    accumulativeDifference: 20,
    idUser: 1,
    idCell: 1,
    issues: [],
  },
];
