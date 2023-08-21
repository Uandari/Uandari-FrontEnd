export interface UserCredentials {
  numeroDeControl: string;
  password: string;
}

export interface UserFormData {
  idUsuario: string,
  numeroDeControl: string,
  nombre: string,
  apellidos: string,
  avatar: string,
  rol: string,
  linea: string,
  celula: string,
  operacion: string,
  turno: string,
}

export interface User extends UserFormData {
  userId?: number;
  isUserAdmin?: boolean;
  currentPassword?: string;
}

export interface FetchedUsers {
  userId: number;
  email: string;
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  shift: string;
  employeeId: string;
  roleName: string;
}

export enum Roles {
  ADMIN = 'Admin',
  ADMINISTRATOR = 'Administrador',
  COORDINADOR = 'Coordinador',
  TEAM_LEADER = 'Team Leader',
  AREA_INDUSTRIAL_ENGINEERING = 'Area Ingenieria Industrial',
  AREA_HUMAN_RESOURCES = 'Area Recursos Humanos',
  AREA_MAINTENENCE = 'Area Mantenimiento',
  AREA_MOUNTING = 'Area Montaje',
  AREA_QUALITY = 'Area Calidad',
}
