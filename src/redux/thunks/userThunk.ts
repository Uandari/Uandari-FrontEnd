import { privateApi, publicApi } from '@api/axios';
import { AppThunkAction } from '@app/store';
import { colors } from '@constants/colors';
import { User, UserFormData } from '@interfaces/User';
import {
  createUserError,
  createUserSuccess,
  deleteUserError,
  deleteUserSuccess,
  getUserSuccess,
  getUsersError,
  getUsersStart,
  getUsersSuccess,
  resetUserMessageError,
  updateUserError,
  updateUserSuccess,
  createUsersStart,
  updateUserStart,
} from '@redux/slices/userSlice';
import CustomApiError from '@utils/ApiError';
import Swal from 'sweetalert2';

const accessToken = localStorage.getItem('accessToken');

export const createUser =
  (userData: UserFormData): AppThunkAction =>
    async (dispatch) => {
      dispatch(createUsersStart());
      await privateApi
        .post('/user/create', { userData })
        .then((response) => {
          if (response.data.isError) {
            const customError = new CustomApiError(response.data).message;
            dispatch(createUserError(customError));
            return;
          }
          dispatch(createUserSuccess(response.data.payload));
          Swal.fire({
            title: 'Creado',
            text: 'El usuario ha sido creado',
            icon: 'success',
            confirmButtonColor: colors.success,
          });
        })
        .catch((error) => {
          const customError = new CustomApiError(error).message;
          dispatch(createUserError(customError));
        });
    };

export const getUser =
  (userId: number): AppThunkAction<Promise<User>> =>
    async (dispatch) => {
      try {
        const response = await publicApi.post('/user', {
          userId,
        });

        if (response.data.isError) {
          throw new Error(response.data.clientMessage);
        }
        dispatch(getUserSuccess);

        return response.data.payload;
      } catch (error) {
        return Promise.reject(error);
      }
    };

export const getUsers = (): AppThunkAction => async (dispatch) => {
  dispatch(getUsersStart());
  await publicApi
    .get('/user/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      if (response.data.isError) {
        const customError = new CustomApiError(response.data).message;
        dispatch(getUsersError(customError));
        return;
      }
      dispatch(getUsersSuccess(response.data.payload));
    })
    .catch((error) => {
      const customError = new CustomApiError(error).message;
      dispatch(getUsersError(customError));
    });
};

export const updateUser =
  (userData: User): AppThunkAction =>
    async (dispatch) => {
      dispatch(updateUserStart);
      await privateApi
        .put('/user/update', userData)
        .then((response) => {
          if (response.data.isError) {
            const customError = new CustomApiError(response.data).message;
            dispatch(updateUserError(customError));
            return;
          }
          dispatch(updateUserSuccess());
          Swal.fire({
            title: 'Actualizado',
            text: 'El usuario ha sido actualizado',
            icon: 'success',
            confirmButtonColor: colors.success,
          });
        })
        .catch((error) => {
          const customError = new CustomApiError(error).message;
          dispatch(updateUserError(customError));
        });
    };

export const deleteUser =
  (userId: number): AppThunkAction =>
    async (dispatch) => {
      await privateApi
        .post('/user/delete', { userId })
        .then((response) => {
          if (response.data.isError) {
            const customError = new CustomApiError(response.data).message;
            dispatch(deleteUserError(customError));
            return;
          }
          dispatch(deleteUserSuccess());
          Swal.fire({
            title: 'Eliminado',
            text: 'El usuario ha sido eliminado',
            icon: 'success',
            confirmButtonColor: colors.success,
          });
        })
        .catch((error) => {
          const customError = new CustomApiError(error).message;
          dispatch(deleteUserError(customError));
        });
    };

export const resetUserError = (): AppThunkAction => async (dispatch) => {
  dispatch(resetUserMessageError());
};
