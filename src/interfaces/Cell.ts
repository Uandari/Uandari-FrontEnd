export interface CellFormData {
  name: string;
  lastNames: string;
  controlNumber: string;
  mail: string;
  password: string;
  idRole: string;
  imageUrl?: string;
}
export interface Cell extends CellFormData {
  idUser: number;
  isDeleted?: number;
}

export interface FetchedCells {
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
