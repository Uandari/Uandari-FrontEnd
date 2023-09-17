<<<<<<< HEAD
=======
export interface User {
  id: number;
  name: string;
  lastNames: string;
  controlNumber: string;
  mail: string;
  role: string;
  imageUrl: string;
}

>>>>>>> f218f5d (feature: user crud integration in progress)
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
  imageUrl: string;
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
