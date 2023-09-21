/* eslint-disable no-param-reassign */
import { User } from '@interfaces/User';
import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

type UserState = InitialStateType<User[] | null>;

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUsersStart(state) {
      state.error = null;
      state.loading = true;
    },
    createUserSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    createUserError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUsersError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    },
    getUserStart(state, action) {
      state.error = action.payload;
      state.loading = true;
    },
    getUserSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUserError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart(state) {
      state.error = null;
      state.loading = true;
    },
    updateUserSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    updateUserError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart(state) {
      state.error = null;
      state.loading = true;
    },
    deleteUserSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    deleteUserError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetUserMessageError(state) {
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  resetUserMessageError,
  createUsersStart,
  createUserError,
  createUserSuccess,
  deleteUserError,
  deleteUserSuccess,
  getUserSuccess,
  getUsersError,
  getUsersStart,
  getUsersSuccess,
  updateUserError,
  updateUserSuccess,
  updateUserStart,
} = usersSlice.actions;

export default usersSlice.reducer;
