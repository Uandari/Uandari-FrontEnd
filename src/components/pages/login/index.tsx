import React, { useEffect, useState } from 'react';

import { RootState, useAppDispatch, useAppSelector } from '@app/store';
import IconKey from '@assets/iconKey.svg';
import IconUser from '@assets/iconUser.svg';
import LoginBackground from '@assets/login-resource.svg';
import VolkswagenColorLogo from '@assets/volkswagen-logo-color.svg';
import CustomInput from '@components/basic/input';
import useErrorModal from '@hooks/useErrorModal';
import { UserCredentials } from '@interfaces/User';
import { postLogin, resetAuthState } from '@redux/thunks/authThunk';
import { DASHBOARD_MAIN, DASHBOARD_USERS, GOALS } from '@routes/paths';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    user: '',
    password: '',
  });

  const { data, error } = useAppSelector(
    (state: RootState) => state.authReducer,
  );
  const { openErrorModal } = useErrorModal(error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('jwtToken')) {
      navigate(DASHBOARD_MAIN);
    }
  }, [navigate]);

  useEffect(() => {
    if (error) {
      openErrorModal();
      dispatch(resetAuthState());
    }
  }, [dispatch, error, openErrorModal]);

  useEffect(() => {
    if (data) {
      navigate(DASHBOARD_MAIN);
    }
  }, [data, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUserCredentials((prevState: UserCredentials) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    navigate(DASHBOARD_MAIN);
  };

  return (
    <main className="flex items-center justify-center min-w-full min-h-full bg-white h-full">
      <div className="flex flex-col w-auto items-center justify-center px-10">
        <img
          src={VolkswagenColorLogo}
          alt="Volkswagen Logo"
          className="w-32 mb-4"
        />
        <h1 className="text-4xl font-semibold text-center mb-2 text-main_blue_dark">
          Iniciar sesión
        </h1>
        <p className="text-lg text-center mx-60 text-main_gray">
          Ingresa los siguientes datos para acceder al sistema Shopfloor
          Management
        </p>

        <form className="w-full text-center mt-14">
          <div className="mb-4 w-full">
            <CustomInput
              type="text"
              placeholder="Clave de usuario"
              className="bg-main_blue_bg border-none text-lg text-main_text_color px-4 py-2 w-96"
              id="user"
              name="user"
              startIcon={IconUser}
              value={userCredentials.user}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6 w-full">
            <CustomInput
              type="password"
              className="bg-main_blue_bg border-none text-lg text-main_text_color px-4 py-2 w-96"
              placeholder="Número de clave"
              id="password"
              name="password"
              startIcon={IconKey}
              value={userCredentials.password}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <img src={LoginBackground} alt="Background" className="w-auto h-full" />
    </main>
  );
}
