export interface User {
  id?: number;
  name: string;
  lastnames: string;
  controlNumber: string;
  mail: string;
  role: string;
  imageUrl: string;
}

export interface UserCredentials {
  controlNumber: string;
  password: string;
}
