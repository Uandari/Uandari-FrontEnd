import { publicApi } from '@api/axios';
import { AppThunkAction } from '@app/store';
import { colors } from '@constants/colors';
import { Administrator } from '@interfaces/Admin';
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
  (userData: Administrator): AppThunkAction =>
  async (dispatch) => {
    dispatch(createUsersStart());
    await publicApi
      .post('/user/create', userData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
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
  (controlNumber: string): AppThunkAction<Promise<Administrator>> =>
  async (dispatch) => {
    try {
      const response = await publicApi.get(`/user/${controlNumber}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data.isError) {
        throw new Error(response.data.clientMessage);
      }
      dispatch(getUserSuccess);

      return response.data.payload[0];
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
      dispatch(getUsersSuccess(response.data.payload));
    })
    .catch((error) => {
      const customError = new CustomApiError(error).message;
      dispatch(getUsersError(customError));
    });
};

export const updateUser =
  (userData: Administrator): AppThunkAction =>
  async (dispatch) => {
    dispatch(updateUserStart);
    await publicApi
      .put('/user/update', userData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
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
  (controlNumber: string): AppThunkAction =>
  async (dispatch) => {
    await publicApi
      .post(
        '/user/delete',
        { controlNumber },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
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
