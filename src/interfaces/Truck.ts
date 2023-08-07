export interface TruckFormData {
  number: string;
  capacity: number;
  brand: string;
  model: string;
  currentStatus?: TruckCurrentStatus;
}

export interface Truck extends TruckFormData {
  truckId: number;
}

export enum TruckCurrentStatus {
  AVAILABLE = 'Disponible',
  ON_THE_WAY = 'En ruta',
}
