/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getToken } from '@utils/index';

interface ResponseState {
  bearer: string | null;
}

const initialState: ResponseState = {
  bearer: getToken(),
};

export const notAuthorizerSlice = createSlice({
  name: 'notAuthorizer',
  initialState,
  reducers: {
    authorizerData(state, action) {
      state.bearer = action.payload;
    },
    authorizerResetState(state) {
      state.bearer = '';
    },
  },
});

export const { authorizerData, authorizerResetState } =
  notAuthorizerSlice.actions;

export default notAuthorizerSlice.reducer;
