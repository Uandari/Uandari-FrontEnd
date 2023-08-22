export interface UserCredentials {
  numeroDeControl: string;
  password: string;
}

export interface UserFormData {
  numeroDeControl: string,
  nombre: string,
  apellidos: string,
  avatar: string,
  rol: string,
  turno: string,
  linea: string,
  celula: string,
  operacion: string,
}
export interface User extends UserFormData {
  idUsuario?: string,
  usuarioEsAdmin?: boolean;
  contraseñaActual?: string;
}

export interface FetchedUsers {
  idUsuario?: string,
  numeroDeControl: string,
  nombre: string,
  apellidos: string,
  avatar: string,
  rol: string,
  turno: string,
  linea: string,
  celula: string,
  operacion: string,
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
export enum Turnos {
  TURN_A = 'Turno A',
  TURN_B = 'Turno B',
  TURN_C = 'Turno C',
}
