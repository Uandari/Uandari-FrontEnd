import { privateApi, publicApi } from '@api/axios';
import { AppThunkAction } from '@app/store';
import { colors } from '@constants/colors';
import { Role } from '@interfaces/Role';
import {
  createRoleError,
  createRoleSuccess,
  deleteRoleError,
  deleteRoleSuccess,
  getRoleSuccess,
  getRolesError,
  getRolesStart,
  getRolesSuccess,
  resetRoleMessageError,
  updateRoleError,
  updateRoleSuccess,
  createRolesStart,
  updateRoleStart,
} from '@redux/slices/roleSlice';
import CustomApiError from '@utils/ApiError';
import Swal from 'sweetalert2';

const accessToken = localStorage.getItem('accessToken');

export const createRole =
  (roleData: Role): AppThunkAction =>
  async (dispatch) => {
    dispatch(createRolesStart());
    await privateApi
      .post('/role/create', roleData)
      .then((response) => {
        if (response.data.isError) {
          const customError = new CustomApiError(response.data).message;
          dispatch(createRoleError(customError));
          return;
        }
        dispatch(createRoleSuccess(response.data.payload));
        Swal.fire({
          title: 'Creado',
          text: 'El rol ha sido creado',
          icon: 'success',
          confirmButtonColor: colors.success,
        });
      })
      .catch((error) => {
        const customError = new CustomApiError(error).message;
        dispatch(createRoleError(customError));
      });
  };

export const getRole =
  (roleId: number): AppThunkAction<Promise<Role>> =>
  async (dispatch) => {
    try {
      const response = await privateApi.post('/role', {
        roleId,
      });

      if (response.data.isError) {
        throw new Error(response.data.clientMessage);
      }
      dispatch(getRoleSuccess);

      return response.data.payload;
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const getRoles = (): AppThunkAction => async (dispatch) => {
  dispatch(getRolesStart());
  await publicApi
    .get('/role/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      if (response.data.isError) {
        const customError = new CustomApiError(response.data).message;
        dispatch(getRolesError(customError));
        return;
      }
      dispatch(getRolesSuccess(response.data.payload));
    })
    .catch((error) => {
      const customError = new CustomApiError(error).message;
      dispatch(getRolesError(customError));
    });
};

export const updateRole =
  (roleData: Role): AppThunkAction =>
  async (dispatch) => {
    dispatch(updateRoleStart);
    await privateApi
      .put('/role/update', roleData)
      .then((response) => {
        if (response.data.isError) {
          const customError = new CustomApiError(response.data).message;
          dispatch(updateRoleError(customError));
          return;
        }
        dispatch(updateRoleSuccess());
        Swal.fire({
          title: 'Actualizado',
          text: 'El rol ha sido actualizado',
          icon: 'success',
          confirmButtonColor: colors.success,
        });
      })
      .catch((error) => {
        const customError = new CustomApiError(error).message;
        dispatch(updateRoleError(customError));
      });
  };

export const deleteRole =
  (roleId: number): AppThunkAction =>
  async (dispatch) => {
    await privateApi
      .post('/role/delete', { roleId })
      .then((response) => {
        if (response.data.isError) {
          const customError = new CustomApiError(response.data).message;
          dispatch(deleteRoleError(customError));
          return;
        }
        dispatch(deleteRoleSuccess());
        Swal.fire({
          title: 'Eliminado',
          text: 'El rol ha sido eliminado',
          icon: 'success',
          confirmButtonColor: colors.success,
        });
      })
      .catch((error) => {
        const customError = new CustomApiError(error).message;
        dispatch(deleteRoleError(customError));
      });
  };

export const resetRoleError = (): AppThunkAction => async (dispatch) => {
  dispatch(resetRoleMessageError());
};
