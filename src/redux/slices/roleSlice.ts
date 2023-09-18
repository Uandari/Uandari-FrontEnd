/* eslint-disable no-param-reassign */
import { Role } from '@interfaces/Role';
import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

type RoleState = InitialStateType<Role[] | null>;

const initialState: RoleState = {
  data: null,
  loading: false,
  error: null,
};

export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    createRolesStart(state) {
      state.error = null;
      state.loading = true;
    },
    createRoleSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    createRoleError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getRolesStart(state) {
      state.loading = true;
      state.error = null;
    },
    getRolesSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getRolesError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    },
    getRoleStart(state, action) {
      state.error = action.payload;
      state.loading = true;
    },
    getRoleSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getRoleError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateRoleStart(state) {
      state.error = null;
      state.loading = true;
    },
    updateRoleSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    updateRoleError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteRoleStart(state) {
      state.error = null;
      state.loading = true;
    },
    deleteRoleSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    deleteRoleError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetRoleMessageError(state) {
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  resetRoleMessageError,
  createRolesStart,
  createRoleError,
  createRoleSuccess,
  deleteRoleError,
  deleteRoleSuccess,
  getRoleSuccess,
  getRolesError,
  getRolesStart,
  getRolesSuccess,
  updateRoleError,
  updateRoleSuccess,
  updateRoleStart,
} = rolesSlice.actions;

export default rolesSlice.reducer;
