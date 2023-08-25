import { UserFormData } from '@interfaces/User';

export const initialUserInfo = {
  idUser: null,
  name: '',
  lastNames: '',
  controlNumber: '',
  mail: '',
  password: '',
  idRole: 0,
  verifiedAccount: 1,
  token: '',
  imageUrl: '',
  isDeleted: 0,
};

export const UsersListMock: UserFormData[] = [
  {
    name: 'Andrés',
    controlNumber: '15156',
    lastNames: 'Cordero Ramírez',
    mail: 'andresmcorderor@gmail.com',
    password: '123',
    idRole: 1,
    imageUrl: '42',
  },
  {
    name: 'Andrés',
    controlNumber: '15156',
    lastNames: 'Cordero Ramírez',
    mail: 'andresmcorderor@gmail.com',
    password: '123',
    idRole: 1,
    imageUrl: '42',
  },
  {
    name: 'Andrés',
    controlNumber: '15156',
    lastNames: 'Cordero Ramírez',
    mail: 'andresmcorderor@gmail.com',
    password: '123',
    idRole: 1,
    imageUrl: '42',
  },
];
