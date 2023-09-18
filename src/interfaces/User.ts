export interface User {
  idUser?: number;
  name: string;
  lastNames: string;
  controlNumber: string;
  mail: string;
  role: string;
  imageUrl: string;
}

export interface UserCredentials {
  controlNumber: string;
  password: string;
}
