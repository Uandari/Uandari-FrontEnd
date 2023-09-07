export interface User {
  id: number;
	name: string;
	lastnames: string;
	controlNumber: number;
	email: string;
	password: string;
	idRole: number;
	imageUrl: string;
	mail: string;
  }

  export interface UserCredentials extends User{
    controlNumber: number;
    password: string;
  }
