import { useEffect, useState } from 'react';

import { RootState, useAppDispatch, useAppSelector } from '@app/store';
import CircleProgressIndicator from '@components/basic/circle_progress_indicator';
import useErrorModal from '@hooks/useErrorModal';
import useUsers from '@hooks/useUsers';
import { FetchedUsers } from '@interfaces/User';
import { getUsers, resetUserError } from '@redux/thunks/userThunk';
import userImage from '@usersIcons/1.png';
import { Button, Form, Input, Popover } from 'antd';

import FormBoard from './Boards/BoardPieces/FormBoard';
import HeadBoard from './Boards/BoardPieces/HeadBoard';
import RowBoard from './Boards/BoardPieces/RowBoard';

export default function Table() {
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

  const [usersData, setUsersData] = useState<FetchedUsers[]>([]);

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.userReducer,
  );

  const { openErrorModal } = useErrorModal(error);

  const handleUpdate = (user: FetchedUsers) => {
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
        (data as FetchedUsers[]).filter((item) =>
          item.numeroDeControl.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [data, searchTerm]);

  if (loading) {
    return (
      <div className="mt-52">
        <CircleProgressIndicator />;
      </div>
    );
  }

  return (
    <div className="h-full grid grid-rows-[7]">
      <div className="flex justify-between items-center px-4 border-b border-main_color">
        <div className="flex items-center gap-2">
          <Form className="w-[400px] text-center mt-2">
            <div className="mb-4 w-full">
              <Form.Item>
                <Input size="large" placeholder="Buscar usuario" />
              </Form.Item>
            </div>
          </Form>
        </div>
        <Popover placement="leftTop" trigger="click" content={<FormBoard />}>
          <Button
            size="large"
            className=" text-base bg-main_blue_dark text-main_white rounded-lg font-medium"
          >
            Registrar nuevo usuario
          </Button>
        </Popover>
      </div>
      <div className="row-span-1">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto row-span-6 hide-scrollbar">
        {usersData.length > 0 ? (
          usersData.map((user) => (
            <RowBoard
              userName={`${user.nombre} ${user.apellidos}`}
              userImage={userImage}
              userRole={user.rol}
              controlNumber={user.numeroDeControl}
              line={user.linea}
              celule={user.celula}
              operation={user.operacion}
              turn={user.turno}
            />
          ))
        ) : (
          <div className="text-xl text-gray text-center mt-24">
            No se encontraron usuarios
          </div>
        )}
        {/* onDelete={() => handleDeleteUser(user.userId)}
          onUpdate={() => handleUpdate(user)} */}
      </div>
      {/*  {isModalOpenToUpdate && (
        <NewUserModal userIdToUpdate={selectedId} onClose={handleCloseModal} />
      )}
      {isModalOpen && <NewUserModal onClose={handleCloseModal} />} */}
    </div>
  );
}
