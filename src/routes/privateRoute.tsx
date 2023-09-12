import React from 'react';

import { RootState, useAppSelector } from '@app/store';
import { Navigate } from 'react-router-dom';

import { LOGIN } from './paths';

type PrivateRouteProps = {
  element: React.ReactNode;
};

function PrivateRoute({ element }: PrivateRouteProps) {
  const { bearer } = useAppSelector(
    (state: RootState) => state.notAuthorizerReducer,
  );

  return !bearer ? <Navigate to={LOGIN} /> : element;
}

export default PrivateRoute;
