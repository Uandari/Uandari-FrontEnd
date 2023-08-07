/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getToken } from '@utils/index';

interface ResponseState {
  jwt: string | null;
}

const initialState: ResponseState = {
  jwt: getToken(),
};

export const notAuthorizerSlice = createSlice({
  name: 'notAuthorizer',
  initialState,
  reducers: {
    authorizerData(state, action) {
      state.jwt = action.payload;
    },
    authorizerResetState(state) {
      state.jwt = '';
    },
  },
});

export const { authorizerData, authorizerResetState } =
  notAuthorizerSlice.actions;

export default notAuthorizerSlice.reducer;
