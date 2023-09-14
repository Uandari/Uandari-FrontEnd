export interface User {
	id?: number;
	name: string;
	lastnames: string;
	controlNumber: string;
	mail: string;
	password: string;
	idRole: number;
	verifiedAccount: number;
	token: string;
	imageUrl: string;
	isDeleted: number;
}

export interface UserCredentials {
	controlNumber: string;
	password: string;
}
