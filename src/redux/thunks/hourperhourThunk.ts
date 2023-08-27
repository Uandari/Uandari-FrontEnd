import { publicApi } from '@api/axios';
import { AppThunkAction } from '@app/store';
import { HourXHour } from '@interfaces/HourXHour';
import {
  getHoursXHoursError,
  getHoursXHoursStart,
  getHoursXHoursSuccess,
} from '@redux/slices/hourxhourSlice';

/* eslint-disable no-param-reassign */
export const getHoursXHours = (): AppThunkAction => async (dispatch) => {
  dispatch(getHoursXHoursStart());
  publicApi
    .get('/hourxhour/getAllHours')
    .then((response) => {
      dispatch(getHoursXHoursSuccess(response.data.payload));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getHoursXHoursError(error));
    });
};
