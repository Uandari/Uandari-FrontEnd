export interface UserCredentials {
  controlNumber: string;
  password: string;
}

export interface UserFormData {
  name: string;
  lastNames: string;
  controlNumber: string;
  mail: string;
  password: string;
  idRole: string;
  imageUrl?: string;
}
export interface User extends UserFormData {
  idUser: number;
  isDeleted?: number;
  verifiedAccount?: number;
  token?: string;
}

export interface FetchedUsers {
  idUser: number;
  name: string;
  lastNames: string;
  controlNumber: string;
  mail: string;
  password: string;
  idRole: number;
  token: string;
  verifiedAccount: number;
  imageUrl: string;
  isDelete: number;
}
