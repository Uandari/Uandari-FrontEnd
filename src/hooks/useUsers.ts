import { useState } from 'react';

import { useAppDispatch } from '@app/store';
import { colors } from '@constants/colors';
import { User, UserFetched, UserFormData } from '@interfaces/User';
import {
  createUser as createUserAction,
  deleteUser as deleteUserAction,
  getUser,
  getUsers,
  updateUser as updateUserAction,
} from '@redux/thunks/userThunk';
import Swal from 'sweetalert2';

const useUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenToUpdate, setIsModalOpenToUpdate] = useState(false);
  const [searchTerm, setSearhTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserFetched | null>(null);

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

  const handleDeleteUser = async (controlNumber: string) => {
    console.log("HandleDeleteUser controlNumber: " + controlNumber)
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
        await dispatch(deleteUserAction(controlNumber));
        dispatch(getUsers());
      }
    });
  };

  const handleCreateUser = async (userData: UserFormData) => {
    console.log("HandleCreateUser userData: " + userData)
    await dispatch(createUserAction(userData));
    dispatch(getUsers());
  };

  const handleUpdateUser = async (userData: User) => {
    console.log("handleUpdateUser userData: " + userData)
    await dispatch(updateUserAction(userData));
    dispatch(getUsers());
  };

  const handleGetUser = async (controlNumber: string) => {
    await dispatch(getUser(controlNumber));
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
    handleGetUser,
  };
};

export default useUsers;
