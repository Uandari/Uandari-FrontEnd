import {  UserFormData } from '@interfaces/User';

export const initialUserInfo = {
  idUser: 0,
  name: '',
  controlNumber: '',
  lastNames: '',
  mail: '',
  password: '',
  idRole: 0,
  token: '',
  imageUrl: '',
};

export const UsersListMock: UserFormData[] = [
  {
    idUser: 1,
    name: 'Andrés',
    controlNumber: '21615156',
    lastNames: 'Cordero Ramírez',
    mail: 'andresmcorderor@gmail.com',
    password: 'efawfa1w81as56f189',
    idRole: 1,
    token: '',
    imageUrl: '',
  },
];
