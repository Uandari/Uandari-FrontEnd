export interface UserCredentials {
  user: string;
  password: string;
}

export interface UserFormData {
  name: string;
  email: string;
  employeeId: string;
  maternalSurname: string;
  paternalSurname: string;
  role: string;
  shift: string;
  password: string;
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
  PICKING_SUPERVISOR = 'Supervisor Picking',
  ADUANA_SUPERVISOR = 'Supervisor Aduanas',
  DELIVERY_SUPERVISOR = 'Supervisor Delivery',
  PICKER = 'Pickero',
}
