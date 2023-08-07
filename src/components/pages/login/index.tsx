import { useEffect, useState } from 'react';

import { RootState, useAppDispatch, useAppSelector } from '@app/store';
import HeinekenLogoColor from '@assets/volkswagen-logo-color.svg';
import CustomButton from '@components/basic/button';
import useErrorModal from '@hooks/useErrorModal';
import { UserCredentials } from '@interfaces/User';
import { postLogin, resetAuthState } from '@redux/thunks/authThunk';
import { DASHBOARD_MAIN } from '@routes/paths';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    user: '',
    password: '',
  });

  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.authReducer,
  );
  const { openErrorModal } = useErrorModal(error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('jwtToken')) {
      // Navigate to dashboard if user has jwtToken
      navigate(DASHBOARD_MAIN);
    }
  }, [navigate]);

  useEffect(() => {
    // Handle validation for errors in state
    if (error) {
      // Show modal if there's an error then clean the state.
      openErrorModal();
      dispatch(resetAuthState());
    }
  }, [dispatch, error, openErrorModal]);

  useEffect(() => {
    // Handle validation for correct login in state
    if (data) {
      // Navigate to dashboard if correct data has been send
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

  return (
    <main className="flex flex-row items-center justify-center min-w-full min-h-full bg-primary">
      <img
              src={HeinekenLogoColor}
              alt="heineken-logo-white"
              className="w-1/3 mb-10"
            />
    </main>
  );
}
