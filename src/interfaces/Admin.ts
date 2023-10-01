export interface Administrator {
  idUser?: number;
  name: string;
  lastNames: string;
  controlNumber: string;
  imageUrl: string;
  role: string | number;
  password?: string;
}

export interface AdministratorsFeteched {
  idUser: number;
  imageUrl: string;
  name: string;
  lastNames: string;
  controlNumber: string;
  role: string;
}
