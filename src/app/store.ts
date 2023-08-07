import authorizerSlice from '@redux/slices/authorizerSlice';
import authSlice from '@redux/slices/authSlice';
import familySlice from '@redux/slices/familySlice';
import productSlice from '@redux/slices/productSlice';
import truckSlice from '@redux/slices/truckSlice';
import userSlice from '@redux/slices/userSlice';
import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    userReducer: userSlice,
    productReducer: productSlice,
    familyReducer: familySlice,
    truckReducer: truckSlice,
    notAuthorizerReducer: authorizerSlice,
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
