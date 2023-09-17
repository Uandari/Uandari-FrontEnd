/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';

import { RootState, useAppDispatch, useAppSelector } from '@app/store';
import imagenUsuario1 from '@assets/usersIcons/1.png';
import imagenUsuario10 from '@assets/usersIcons/10.png';
import imagenUsuario2 from '@assets/usersIcons/2.png';
import imagenUsuario3 from '@assets/usersIcons/3.png';
import imagenUsuario4 from '@assets/usersIcons/4.png';
import imagenUsuario5 from '@assets/usersIcons/5.png';
import imagenUsuario6 from '@assets/usersIcons/6.png';
import imagenUsuario7 from '@assets/usersIcons/7.png';
import imagenUsuario8 from '@assets/usersIcons/8.png';
import imagenUsuario9 from '@assets/usersIcons/9.png';
import useUsers from '@hooks/useUsers';
import { User } from '@interfaces/User';
import { getUsers } from '@redux/thunks/userThunk';

import Board from '../../board';
import RowBoard from '../RowBoard';


export default function AllTab() {
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


  const {
    handleDeleteUser,
    setIsModalOpenToUpdate,
    setSelectedUser,
    searchTerm,
  } = useUsers();

  const [usersData, setUsersData] = useState<User[]>([]);

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state: RootState) => state.userReducer);

  const handleUpdate = (user: User) => {
    setSelectedUser(user);
    setIsModalOpenToUpdate(true);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  useEffect(() => {
    if (Array.isArray(data)) {
      setUsersData(
        (data as User[]).filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [data, searchTerm]);


  return (

    <Board>
      {usersData.length > 0 ? (
        usersData.map((user) => (
          <RowBoard
            key={user.controlNumber}
            userName={`${user.name} ${user.lastNames}`}
            controlNumber={user.controlNumber}
            role={user.role}
            imageUrl={user.imageUrl || getRandomImageUrl()}
            onDelete={() => handleDeleteUser(user.id ?? 0)}
            onUpdate={() => handleUpdate(user)}
          />
        ))
      ) : (
        <div className="text-center text-xl mt-28 text-gray">
          No se encontraron usuarios
        </div>
      )}
    </Board>
  );
}




AllTab.defaultProps = {
  role: "Rol",
  allUsersTab: true,
};
