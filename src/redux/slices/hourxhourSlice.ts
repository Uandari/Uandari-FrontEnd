/* eslint-disable no-param-reassign */
import { HourXHour } from '@interfaces/HourXHour';
import { createSlice } from '@reduxjs/toolkit';

interface ResponseState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

type HourXHourState = ResponseState<HourXHour[] | null>;

const initialState: HourXHourState = {
  data: null,
  loading: false,
  error: null,
};

export const hourxhourSlice = createSlice({
  name: 'hourxhour',
  initialState,
  reducers: {
    createHourXHourStart(state) {
      state.error = null;
    },
    createHourXHourSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    createHourXHourError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getHoursXHoursStart(state) {
      state.loading = true;
      state.error = null;
    },
    getHoursXHoursSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getHoursXHoursError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateHourXHourStart(state) {
      state.error = null;
    },
    updateHourXHourSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    updateHourXHourError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetHourXHourMessageError(state) {
      state.error = null;
    },
    resetHourXHour(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  createHourXHourStart,
  createHourXHourSuccess,
  createHourXHourError,
  getHoursXHoursStart,
  getHoursXHoursSuccess,
  getHoursXHoursError,
  updateHourXHourStart,
  updateHourXHourSuccess,
  updateHourXHourError,
  resetHourXHourMessageError,
  resetHourXHour,
} = hourxhourSlice.actions;

export default hourxhourSlice.reducer;
