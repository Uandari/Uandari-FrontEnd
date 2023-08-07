import { useAppDispatch } from '@app/store';
import HeinekenLogoColor from '@assets/heineken-logo-color.png';
import { Logout } from '@mui/icons-material';
import { resetAuthState } from '@redux/thunks/authThunk';
import { LOGIN } from '@routes/paths';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogoutButton = () => {
    sessionStorage.removeItem('jwtToken');
    dispatch(resetAuthState());
    navigate(LOGIN);
  };

  return (
    <nav className="bg-white border-gray-200 drop-shadow-xl">
      <div className="flex flex-wrap items-center justify-between mx-auto p-5">
        <a
          href="https://heineken.cbqasolutions.com/"
          className="flex items-center"
        >
          <img src={HeinekenLogoColor} className="h-8" alt="logo" />
        </a>
        <button type="button" onClick={handleLogoutButton}>
          <Logout className="text-secondary" />
        </button>
      </div>
    </nav>
  );
}
