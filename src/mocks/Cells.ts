import { CellFormData } from '@interfaces/Cell';

export const initialUserInfo = {
  idUser: null,
  name: '',
  lastNames: '',
  controlNumber: '',
  mail: '',
  password: '',
  idRole: '0',
  verifiedAccount: 1,
  token: '',
  imageUrl: '',
  isDeleted: 0,
};

export const CellsListMock: CellFormData[] = [
  {
    name: 'Andrés',
    controlNumber: 'WF16S51AW6F1',
    lastNames: 'Cordero Ramírez',
    mail: 'andresmcorderor@gmail.com',
    password: 'efawfa1w81as56f189',
    idRole: '1',
    imageUrl: '',
  },
];
