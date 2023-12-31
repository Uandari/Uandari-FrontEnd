import { privateApi, publicApi } from '@api/axios';
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
  (controlNumber: string, password: string): AppThunkAction =>
  async (dispatch) => {
    dispatch(authDataStart());
    publicApi
      .post('/user/login', {
        controlNumber,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.payload.token);
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
