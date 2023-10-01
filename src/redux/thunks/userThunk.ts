import { publicApi } from '@api/axios';
import { AppThunkAction } from '@app/store';
import { colors } from '@constants/colors';
import { User } from '@interfaces/IssueCard';
import { UserFormData } from '@interfaces/User';
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
  (controlNumber: string): AppThunkAction<Promise<User>> =>
  async (dispatch) => {
    try {
      const response = await publicApi.post('/user', {
        controlNumber,
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
      /* if (response.data.isError) {
        const customError = new CustomApiError(response.data).message;
        dispatch(getUsersError(customError));
        return;
      } */
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
  (userControlNumber: string): AppThunkAction =>
  async (dispatch) => {
    await publicApi
      .post(
        '/user/delete',
        { userControlNumber },
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
