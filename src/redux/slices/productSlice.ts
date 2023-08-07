/* eslint-disable no-param-reassign */
import { Product } from '@interfaces/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

type ProductState = InitialStateType<Product[]>;

const initialState: ProductState = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    createProductSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    createProductError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchProductsStart(state) {
      state.loading = true;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchProductsError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    },
    fetchSingleProductSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    updateProductSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    updateProductError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductSuccess(state, action) {
      const productIdToDelete = action.payload;
      state.data = (state.data as Product[]).filter(
        (product) => product.productId !== productIdToDelete,
      );
    },
    deleteProductError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearError(state) {
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  createProductSuccess,
  createProductError,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
  fetchSingleProductSuccess,
  updateProductSuccess,
  updateProductError,
  deleteProductSuccess,
  deleteProductError,
  setLoading,
  clearError,
} = productSlice.actions;

export default productSlice.reducer;
