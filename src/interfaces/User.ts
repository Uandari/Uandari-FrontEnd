export interface User {
  idUser?: number;
  name: string;
  lastNames: string;
  controlNumber: string;
  mail: string;
  idRole: number;
  role: string;
  imageUrl: string;
}

export interface UserCredentials {
  controlNumber: string;
  password: string;
}

export interface UserFormData {
  idUser: number;
  name: string;
  lastNames: string;
  controlNumber: string;
  mail: string;
  password: string;
  idRole: number;
  role: string;
  imageUrl: string;
  password: string;
}

export interface User extends UserFormData {
  idUser?: number;
}

export interface UserFetched {
  idUser: number;
  name: string;
  lastNames: string;
  imageUrl: string;
  controlNumber: string;
  role: string;
  idRole: number;
}