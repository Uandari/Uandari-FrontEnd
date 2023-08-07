/* import { privateApi } from '@api/axios';
import { AppThunkAction } from '@app/store';
import { colors } from '@constants/colors';
import { FetchedProduct, Product, ProductFormData } from '@interfaces/Product';
import {
  createProductError,
  createProductSuccess,
  fetchProductsError,
  fetchProductsSuccess,
  fetchSingleProductSuccess,
  updateProductError,
  updateProductSuccess,
  deleteProductError,
  deleteProductSuccess,
  setLoading,
} from '@redux/slices/productSlice';
import CustomApiError from '@utils/ApiError';
import Swal from 'sweetalert2';

export const createProduct =
  (productData: ProductFormData): AppThunkAction<void> =>
  async (dispatch) => {
    privateApi
      .post('/product/create', productData)
      .then((response) => {
        if (response.data.isError) {
          throw new Error(response.data.clientMessage);
        }
        dispatch(createProductSuccess());
        Swal.fire({
          title: 'Creado',
          text: 'El producto ha sido creado',
          icon: 'success',
          confirmButtonColor: colors.primary,
        });
      })
      .catch((error) => {
        const customError = new CustomApiError(error).message;
        dispatch(createProductError(customError));
      });
  };

export const getProducts = (): AppThunkAction => async (dispatch) => {
  dispatch(setLoading());
  privateApi
    .get('/product/get')
    .then((response) => {
      dispatch(fetchProductsSuccess(response.data.payload));
    })
    .catch((error) => {
      const customError = new CustomApiError(error).message;
      dispatch(fetchProductsError(customError));
    });
};

export const getProductById =
  (productId: number): AppThunkAction<Promise<FetchedProduct>> =>
  async (dispatch) => {
    try {
      const response = await privateApi.post('/product/get', {
        productId,
      });

      if (response.data.isError) {
        throw new Error(response.data.clientMessage);
      }
      dispatch(fetchSingleProductSuccess());

      return response.data.payload;
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const updateProduct =
  (productData: Product): AppThunkAction<void> =>
  async (dispatch) => {
    await privateApi
      .put('/product/update', productData)
      .then((response) => {
        if (response.data.isError) {
          throw new Error(response.data.clientMessage);
        }
        dispatch(updateProductSuccess());
        Swal.fire({
          title: 'Actualizado',
          text: 'El producto ha sido actualizado',
          icon: 'success',
          confirmButtonColor: colors.primary,
        });
      })
      .catch((error) => {
        const customError = new CustomApiError(error).message;
        dispatch(updateProductError(customError));
      });
  };

export const deleteProduct =
  (productId: number): AppThunkAction<Promise<void>> =>
  async (dispatch) => {
    await privateApi
      .post('/product/delete', {
        productId,
      })
      .then((response) => {
        if (response.data.isError) {
          throw new Error(response.data.clientMessage);
        }
        dispatch(deleteProductSuccess(productId));
        Swal.fire({
          title: 'Eliminado',
          text: 'El producto ha sido eliminado',
          icon: 'success',
          confirmButtonColor: colors.primary,
        });
      })
      .catch((error) => {
        const customError = new CustomApiError(error).message;
        dispatch(deleteProductError(customError));
      });
  };
 */