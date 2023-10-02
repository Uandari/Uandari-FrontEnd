import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector, RootState } from '@app/store';
import PlusIcon from '@assets/icons/plus.svg';
import useUsers from '@hooks/useUsers';
import { Administrator, AdministratorsFeteched } from '@interfaces/Admin';
import { getUsers } from '@redux/thunks/userThunk';
import { User, UserFetched } from '@interfaces/User';
import { UsersListMock } from '@mocks/Users';
import imagenUsuario1 from '@assets/usersIcons/user_1.png';
import imagenUsuario2 from '@assets/usersIcons/user_10.png';
import imagenUsuario3 from '@assets/usersIcons/user_11.png';
import imagenUsuario4 from '@assets/usersIcons/user_12.png';
import imagenUsuario5 from '@assets/usersIcons/user_13.png';
import imagenUsuario6 from '@assets/usersIcons/user_15.png';
import imagenUsuario7 from '@assets/usersIcons/user_2.png';
import imagenUsuario8 from '@assets/usersIcons/user_3.png';
import imagenUsuario9 from '@assets/usersIcons/user_4.png';
import imagenUsuario10 from '@assets/usersIcons/user_5.png';

import DrawerComponent from './Drawer';
import RowBoard from './RowBoard';

export default function AdminPage() {
  const {
    searchTerm,
    handleInputChange,
    handleDeleteUser,
    setSelectedUser,
    setIsDrawerOpenToUpdate,
    isDrawerOpenToUpdate,
    isDrawerOpen,
    handleCloseDrawer,
    selectedUser,
  } = useUsers();
  const [usersData, setUsersData] = useState<AdministratorsFeteched[]>([]);

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.userReducer,
  );

  const handleUpdate = (user: Administrator) => {
    setSelectedUser(user);
    setIsDrawerOpenToUpdate(true);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setUsersData(
        (data as AdministratorsFeteched[]).filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [data, searchTerm]);
  const userImages = [
    imagenUsuario1,
    imagenUsuario2,
    imagenUsuario3,
    imagenUsuario3,
    imagenUsuario4,
    imagenUsuario5,
    imagenUsuario6,
    imagenUsuario7,
    imagenUsuario8,
    imagenUsuario9,
    imagenUsuario10,
  ];

  function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * userImages.length);
    return userImages[randomIndex];
  }

  return (
    <div >
      <div className="flex justify-between items-center px-4 pb-4 pt-0 border-b">
        <input
          placeholder="Buscar línea por nombre"
          className="border border-main_color pl-3 py-2 w-[300px] rounded-lg outline-none"
        />
        <button
          onClick={() => setIsDrawerOpenToUpdate(true)}
          className="flex items-center gap-x-3 px-6 py-2 bg-main_blue_dark text-white rounded-lg"
          type="button"
        >
          <img className="" src={PlusIcon} alt="plus-icon" />
          Registrar nuevo administrador
        </button>
      </div>

      <div className="grid grid-cols-3 border-b py-2 px-5 border-main_color">
        <div className="font-medium text-main_text_color">Usuario</div>
        <div className="font-medium text-main_text_color">Número de control</div>
        <div className="font-medium text-main_text_color">Rol</div>
      </div>
      {UsersListMock.map((user: UserFetched) => {
        if (user.role === 'Administrador') {
          return (
            <RowBoard
              key={user.idUser}
              name={user.name}
              lastNames={user.lastNames}
              controlNumber={user.controlNumber}
              img={getRandomImageUrl()}
              role={user.role}
              onDelete={() => handleDeleteUser(user.controlNumber)}
              onUpdate={() => handleUpdate(user)}
            />
          );
        }
        // Devuelve null si el rol no es "Administrador"
        return null;
      })}

      {isDrawerOpenToUpdate && (
        <DrawerComponent
          userControlNumberToUpdate={selectedUser?.controlNumber}
          open={isDrawerOpenToUpdate}
          onClose={handleCloseDrawer}
        />
      )}
      {isDrawerOpen && (
        <DrawerComponent
          onClose={handleCloseDrawer}
          open={isDrawerOpenToUpdate}
        />
      )}
    </div>
  );
}
