import { publicApi } from '@api/axios';
import { AppThunkAction } from '@app/store';
import { authorizerData } from '@redux/slices/authorizerSlice';
import {
  authDataError,
  authDataStart,
  authDataSuccess,
  authResetState,
} from '@redux/slices/authSlice';
import CustomApiError from '@utils/ApiError';

export const postLogin =
  (user: string, password: string): AppThunkAction =>
  async (dispatch) => {
    dispatch(authDataStart());
    // TODO: delete deviceId once endpoint has been updated
    publicApi
      .post('/user/login', {
        deviceId: 'iphone14id',
        employeeId: user,
        password,
      })
      .then((response) => {
        sessionStorage.setItem('jwtToken', response.data.payload);
        dispatch(authorizerData(response.data.payload));
        dispatch(authDataSuccess(response.data.payload));
      })
      .catch((error) => {
        const customError = new CustomApiError(error).message;
        dispatch(authDataError(customError));
      });
  };

export const resetAuthState = (): AppThunkAction => async (dispatch) => {
  dispatch(authResetState());
};
