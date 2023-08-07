export interface ProductFormData {
  name: string;
  description: string;
  sku: string;
  weight: number;
  internalCode: string;
  family: number;
}

export interface Product extends ProductFormData {
  productId: number;
}

export interface FetchedProduct {
  productId: number;
  name: string;
  description: string;
  sku: string;
  weight: number;
  internalCode: string;
  fkFamily: number;
}
