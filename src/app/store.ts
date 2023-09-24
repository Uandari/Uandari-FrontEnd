import authorizerSlice from '@redux/slices/authorizerSlice';
import authSlice from '@redux/slices/authSlice';
import userSlice from '@redux/slices/userSlice';
import hourxhourSlice from '@redux/slices/hourxhourSlice';
import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import roleSlice from '@redux/slices/roleSlice';

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    userReducer: userSlice,
    roleReducer: roleSlice,
    notAuthorizerReducer: authorizerSlice,
    hourxhourReducer: hourxhourSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkAction<ActionReturnType = void> = ThunkAction<
  ActionReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuthSelector = () =>
  useAppSelector((state) => state.authReducer.data);
