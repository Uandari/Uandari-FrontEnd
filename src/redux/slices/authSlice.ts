/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface ResponseState {
  data: string;
  loading: boolean;
  error: string | null;
}

const initialState: ResponseState = {
  data: '',
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    authDataSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    authDataError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    authResetState(state) {
      state.data = '';
      state.loading = false;
      state.error = null;
    },
  },
});

export const { authDataStart, authDataSuccess, authDataError, authResetState } =
  authSlice.actions;

export default authSlice.reducer;
