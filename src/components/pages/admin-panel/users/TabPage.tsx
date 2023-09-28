import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector, RootState } from '@app/store';
import PlusIcon from '@assets/icons/plus.svg';
import ImgProfile from '@assets/usersIcons/12.png';
import useUsers from '@hooks/useUsers';
import { UserFetched } from '@interfaces/User';
import { getUsers } from '@redux/thunks/userThunk';

export default function TabPage() {
  const { searchTerm } = useUsers();
  const [usersData, setUsersData] = useState<UserFetched[]>([]);

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.userReducer,
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setUsersData(
        (data as UserFetched[]).filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [data, searchTerm]);
  return (
    <div>
      <div className="flex justify-between items-center px-4 ">
        <input
          placeholder="Buscar administrador por nombre"
          className="border border-main_color pl-3 py-2 w-[300px] rounded-lg outline-none"
        />
        <button
          className="flex items-center gap-x-3 px-6 py-2 bg-main_blue_dark text-white rounded-lg"
          type="button"
        >
          <img className="" src={PlusIcon} alt="plus-icon" />
          Registrar nuevo usuario
        </button>
      </div>
      <div>
        <div className='grid grid-cols-1'></div>
        <p>1</p>
        <img className="w-12" src={ImgProfile} alt="img-profile" />
        <p>Cocho</p>
        <p>Tanques cafes</p>
        <p>12345</p>
        <p>Administrador</p>
      </div>
    </div>
  );
}
