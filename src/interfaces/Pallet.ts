import { ProductFormData } from './Product';

export interface Pallet {
  id: string;
  workOrderId: string;
  pickerId: string;
  family: string;
  currentStatus: string;
  workOrderConsecutive: number;
  palletDetail: PalletDetail;
}

export interface PalletDetail {
  id: string;
  productId: string[];
  palletId: string;
  cap: number;
  pick: number;
  measureUnit: string;
  totalWeight: number;
  totalProducts: number;

  // for mock puroposes
  productsList: ProductFormData[];
}
