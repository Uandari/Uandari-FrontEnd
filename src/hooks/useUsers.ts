import { useState } from 'react';

import { useAppDispatch } from '@app/store';
import { colors } from '@constants/colors';
import { User } from '@interfaces/User';
import {
  createUser as createUserAction,
  deleteUser as deleteUserAction,
  getUser,
  getUsers,
  updateUser as updateUserAction,
} from '@redux/thunks/userThunk';
import Swal from 'sweetalert2';

const useUsers = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpenToUpdate, setIsDrawerOpenToUpdate] = useState(false);
  const [searchTerm, setSearhTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const dispatch = useAppDispatch();

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
    setIsDrawerOpenToUpdate(false);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setIsDrawerOpenToUpdate(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = async (id: number) => {
    Swal.fire({
      title: 'Eliminar Usuario',
      text: '¿Está seguro que desea eliminar el usuario seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#001E50',
      cancelButtonColor: '#6E78816A',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteUserAction(controlNumber));
        dispatch(getUsers());
      }
    });
  };

  const handleCreateUser = async (userData: UserFormData) => {
    await dispatch(createUserAction(userData));
    dispatch(getUsers());
  };

  const handleUpdateUser = async (userData: User) => {
    await dispatch(updateUserAction(userData));
    dispatch(getUsers());
  };
  

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setSearhTerm(event.target.value);
  };

  return {
    isDrawerOpen,
    isDrawerOpenToUpdate,
    selectedUser,
    handleOpenDrawer,
    handleCloseDrawer,
    handleDeleteUser,
    handleUpdateUser,
    handleCreateUser,
    setIsDrawerOpen,
    setIsDrawerOpenToUpdate,
    setSelectedUser,
    searchTerm,
    setSearhTerm,
    handleInputChange,
    handleGetUser,
  };
};

export default useUsers;
