import { useState } from 'react';

import { useAppDispatch } from '@app/store';
import { colors } from '@constants/colors';
import { FetchedUsers, User, UserFormData } from '@interfaces/User';
import {
  createUser as createUserAction,
  deleteUser as deleteUserAction,
  getUsers,
  updateUser as updateUserAction,
} from '@redux/thunks/userThunk';
import Swal from 'sweetalert2';

const useUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenToUpdate, setIsModalOpenToUpdate] = useState(false);
  const [searchTerm, setSearhTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<FetchedUsers | null>(null);

  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsModalOpenToUpdate(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsModalOpenToUpdate(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = async (id: number) => {
    Swal.fire({
      title: 'Eliminar Usuario',
      text: '¿Está seguro que desea eliminar el usuario seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: `${colors.success}`,
      cancelButtonColor: `${colors.error}`,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteUserAction(id));
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
    isModalOpen,
    isModalOpenToUpdate,
    selectedUser,
    handleOpenModal,
    handleCloseModal,
    handleDeleteUser,
    handleUpdateUser,
    handleCreateUser,
    setIsModalOpen,
    setIsModalOpenToUpdate,
    setSelectedUser,
    searchTerm,
    setSearhTerm,
    handleInputChange,
  };
};

export default useUsers;
