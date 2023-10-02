import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector, RootState } from '@app/store';
import PlusIcon from '@assets/icons/plus.svg';
import useUsers from '@hooks/useUsers';
import { Administrator, AdministratorsFeteched } from '@interfaces/Admin';
import { getUsers } from '@redux/thunks/userThunk';

import DrawerComponent from './Drawer';
import RowBoard from './RowBoard';

export default function UserPage() {
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
  return (
    <div className="flex flex-1 flex-col borderoverflow-y-scroll">
      <div className="flex justify-between items-center px-4 ">
        <input
          onChange={handleInputChange}
          placeholder="Buscar administrador por nombre"
          className="border border-main_color pl-3 py-2 w-[300px] rounded-lg outline-none"
        />
        <button
          onClick={() => setIsDrawerOpenToUpdate(true)}
          className="flex items-center gap-x-3 px-6 py-2 bg-main_blue_dark text-white rounded-lg"
          type="button"
        >
          <img className="" src={PlusIcon} alt="plus-icon" />
          Registrar nuevo usuario
        </button>
      </div>
      <div className="grid grid-cols-5 border-y py-2 mt-3 px-5 gap-4">
        <div className="font-medium text-main_text_color">Usuario</div>
        <div className="font-medium text-main_text_color">
          Número de control
        </div>
        <div className="font-medium text-main_text_color">Rol</div>
      </div>
      {usersData.length > 0 && usersData ? (
        usersData.map((user) => (
          <RowBoard
            key={user.idUser}
            name={user.name}
            lastnames={user.lastNames}
            controlNumber={user.controlNumber}
            img={user.imageUrl}
            role={user.role}
            onDelete={() => handleDeleteUser(user.controlNumber)}
            onUpdate={() => handleUpdate(user)}
          />
        ))
      ) : (
        <div className="text-center mt-[200px] font-medium text-lg text-main_text_color">
          No se encontraron usuarios
        </div>
      )}

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
