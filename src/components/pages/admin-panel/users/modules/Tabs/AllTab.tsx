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
import CircleProgressIndicator from '@components/basic/circle_progress_indicator';
import useErrorModal from '@hooks/useErrorModal';
import useUsers from '@hooks/useUsers';
import { UserFetched } from '@interfaces/User';
import { getUsers, resetUserError } from '@redux/thunks/userThunk';
import { Button, Form, Input, Popover } from 'antd';

import FormBoard from '../FormBoard';
import HeadBoard from '../HeadBoard';
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
    isModalOpen,
    isModalOpenToUpdate,
    handleOpenModal,
    handleCloseModal,
    handleDeleteUser,
    setIsModalOpenToUpdate,
    setSelectedUser,
    selectedUser,
  } = useUsers();
  const { searchTerm, handleInputChange } = useUsers();

  const [usersData, setUsersData] = useState<UserFetched[]>([]);

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.userReducer,
  );

  const { openErrorModal } = useErrorModal(error);

  const handleUpdate = (user: UserFetched) => {
    setSelectedUser(user);
    setIsModalOpenToUpdate(true);
  };

  const handleClose = (callback?: () => void) => {
    handleCloseModal();
    if (callback) {
      callback();
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      openErrorModal().then(() => dispatch(resetUserError()));
    }
  }, [dispatch, error, openErrorModal]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setUsersData(
        (data as UserFetched[]).filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [data, searchTerm]);

  if (loading) {
    return <CircleProgressIndicator />;
  }

  console.log(`isModalOpenToUpdate: ${isModalOpenToUpdate}`);
  console.log(`isModalOpen: ${isModalOpen}`);
  console.log(`selectedUser: ${selectedUser}`);

  return (
    <div className="h-full grid grid-rows-[7]">
      <div className="flex justify-between items-center px-4 border-b border-main_color">
        <div className="flex items-center gap-2">
          <Form className="w-[400px] text-center mt-2">
            <div className="mb-4 w-full">
              <Form.Item>
                <Input
                  type="text"
                  id="search"
                  name="search"
                  size="large"
                  placeholder="Buscar usuario por nombre"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </div>
          </Form>
        </div>
        <Popover
          placement="leftTop"
          trigger="click"
          content={
            isModalOpenToUpdate ? (
              <FormBoard
                userControlNumberToUpdate={selectedUser?.controlNumber}
                onClose={handleClose}
              />
            ) : (
              <FormBoard onClose={handleClose} />
            )
          }
        >
          <Button
            size="large"
            className="text-base bg-main_blue_dark text-main_white rounded-lg mb-4 font-medium"
            onClick={handleOpenModal}
          >
            Registrar nuevo usuario
          </Button>
        </Popover>
      </div>
      <div className="row-span-1">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
        {usersData.length > 0 ? (
          usersData.map((user) => (
            <RowBoard
              key={user.controlNumber}
              userName={`${user.name} ${user.lastNames}`}
              controlNumber={user.controlNumber}
              role={user.role}
              imageUrl={user.imageUrl || getRandomImageUrl()}
              onDelete={() => handleDeleteUser(user.controlNumber)}
              onUpdate={() => handleUpdate(user)}
            />
          ))
        ) : (
          <div className="text-center text-xl mt-28 text-gray">
            No se encontraron usuarios
          </div>
        )}
      </div>
    </div>
  );
}

AllTab.defaultProps = {
  role: 'Rol',
  allUsersTab: true,
};
