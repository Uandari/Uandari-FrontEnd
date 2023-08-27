/* import { useEffect, useState } from 'react';

import { RootState, useAppDispatch, useAppSelector } from '@app/store';*/

import { UsersListMock } from '@mocks/Users';
/* import CircleProgressIndicator from '@components/basic/circle_progress_indicator';
import useErrorModal from '@hooks/useErrorModal';
import useUsers from '@hooks/useUsers';
import { FetchedUsers } from '@interfaces/User';
import { getUsers, resetUserError } from '@redux/thunks/userThunk'; */
import { Button, Form, Input, Popover } from 'antd';

import FormBoard from './modules/FormBoard';
import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';

export type BoardProps = {
  children: React.ReactNode;
};

export default function Board({
  children
}: BoardProps) {
 

  /* 
  const {
    isModalOpen,
    isModalOpenToUpdate,
    handleOpenModal,
    handleCloseModal,
    handleDeleteUser,
    setIsModalOpenToUpdate,
    setSelectedUser,
    selectedUser,
    searchTerm,
    handleInputChange,
  } = useUsers();
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
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [data, searchTerm]);

  if (loading) {
    return <CircleProgressIndicator />;
  }
 */
  return (
    <div className="h-full grid grid-rows-[7]">
      <div className="flex justify-between items-center px-4 border-b border-main_color">
        <div className="flex items-center gap-2">
          <Form className="w-[400px] text-center mt-2">
            <div className="mb-4 w-full">
              <Form.Item>
                <Input
                  size="large"
                  placeholder="Buscar usuario"
                /* onChange={handleInputChange} */
                />
              </Form.Item>
            </div>
          </Form>
        </div>
        <Popover
          placement="leftTop"
          trigger="click"
          content={
            <FormBoard
            /* userIdToUpdate={selectedUser?.idUser} */
            />
            /*  isModalOpenToUpdate ? (
               <FormBoard
                 userIdToUpdate={selectedUser?.idUser}
                 onClose={handleClose}
               />
             ) : (
               isModalOpen && <FormBoard onClose={handleClose} />
             ) // Esto mostrará null como contenido si la condición no se cumple
           } */
          }
        >
          <Button
            size="large"
            className=" text-base bg-main_blue_dark  text-main_white rounded-lg mb-4  font-medium"
          /* onClick={handleOpenModal} */
          >
            Registrar nuevo usuario
          </Button>
        </Popover>
      </div>
      <div className="row-span-1">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
        {children}
        

      </div>
    </div>
  );
}

/* usersData.map((user) => (
  <RowBoard
    key={user.idUser}
    imageUrl={imagenUsuario}
    role={user.idRole}
    userName={`${user.name} ${user.lastNames}`}
    controlNumber={user.controlNumber}
    onDelete={() => handleDeleteUser(user.idUser)}
    onUpdate={() => handleUpdate(user)}
  />
)) */