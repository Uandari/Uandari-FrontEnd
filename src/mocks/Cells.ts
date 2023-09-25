import { Cell } from '@interfaces/Cell';

export const cellsLabels = [
  {
    value: 'Célula 1',
    label: 'Célula 1',
  },
  {
    value: 'Célula 2',
    label: 'Célula 2',
  },
  {
    value: 'Célula 3',
    label: 'Célula 3',
  },
];


export const initialCellInfo = {
  id: 0,
  cellName: '',
  idUser: 0,
  idLine: 0,
};

export const CellsListMock: Cell[] = [
  {
    id: 0,
    cellName: 'Célula 1',
    idUser: 2,
    idLine: 3,
  },
  {
    id: 0,
    cellName: 'Célula 2',
    idUser: 8,
    idLine: 1,
  },
  {
    id: 0,
    cellName: 'Célula 3',
    idUser: 11,
    idLine: 2,
  },
  {
    id: 0,
    cellName: 'Célula 4',
    idUser: 1,
    idLine: 3,
  },
  {
    id: 0,
    cellName: 'Célula 5',
    idUser: 6,
    idLine: 4,
  },
];
