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
  idRole?: number;
  imageUrl?: string;
}
export interface User extends UserFormData {
  idUser?: number;
  isDeleted?: number;
  verifiedAccount?: number;
  token?: string;
}
