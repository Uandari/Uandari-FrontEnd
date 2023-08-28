import { useEffect } from 'react';

import { useAppDispatch } from '@app/store';
import useForm from '@hooks/useForm';
import useUsers from '@hooks/useUsers';
import UserIcon from '@icons/iconUser.svg';
import { User, UserFormData } from '@interfaces/User';
import { initialUserInfo } from '@mocks/Users';
import { getUser } from '@redux/thunks/userThunk';
import { Button, Form, Input, Select } from 'antd';

import {
  usersCreateValidation,
  usersUpdateValidations,
} from '../../../../../formValidations/usersValidations';

type FormBoardProps = {
  /* onClose: (callback?: () => void) => void; */
  userIdToUpdate?: number;
};

function FormBoard({ /* onClose, */ userIdToUpdate }: FormBoardProps) {
  const rolesMock = [
    { value: 1, label: 'Administrador' },
    { value: 2, label: 'Coordinador' },
    { value: 3, label: 'Team Leader' },
  ];
  /* 
  const dispatch = useAppDispatch();

  const { handleCreateUser, handleUpdateUser } = useUsers();

  const handleCreateOrUpdateUser = (state: UserFormData) => {
    const userModifiable = { ...state };

    if (userIdToUpdate) {
      handleUpdateUser({
        ...userModifiable,
        idUser: userIdToUpdate,
      });
    } else {
      const userInfoToCreate: User = { ...state };
      delete userInfoToCreate.idUser;

      handleCreateUser(userInfoToCreate);
    }
    onClose();
  };

  const { errors, handleInputChange, handleSubmit, state, setState, reset } =
    useForm<UserFormData>(
      initialUserInfo,
      userIdToUpdate ? usersUpdateValidations : usersCreateValidation,
      handleCreateOrUpdateUser,
    );

  useEffect(() => {
    if (userIdToUpdate) {
      dispatch(getUser(userIdToUpdate))
        .then((userData: UserFormData) => {
          setState({
            name: userData.name,
            lastNames: userData.lastNames,
            controlNumber: userData.controlNumber,
            mail: userData.mail,
            password: userData.password,
            idRole: userData.idRole,
            imageUrl: userData.imageUrl,
          });
        })
        .catch((error) => {
          console.error(
            'Error al extraer los datos del usuario:',
            error.message,
          );
        });
    }
  }, [dispatch, userIdToUpdate, setState]);
 */
  return (
    <div className="w-[365px]">
      <div className="px-5 pt-3">
        <p className="text-black font-medium ">
          {userIdToUpdate ? 'Editar Usuario' : 'Registro de Usuario'}
        </p>
      </div>
      <div className="pt-6">
        <Form.Item>
          <div className="flex items-start gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Input placeholder="Número de control" />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex items-start gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Input placeholder="Nombre" />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex items-start gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Input placeholder="Apellidos" />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex items-center gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Select defaultValue={rolesMock[0].label} options={rolesMock} />
          </div>
        </Form.Item>
        <div className="flex justify-end">
          <Form.Item>
            <Button
              className="bg-main_blue_dark"
              htmlType="submit"
              type="primary"
              size="large"
              /* onClick={handleSubmit} */
            >
              Guardar
            </Button>
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default FormBoard;

FormBoard.defaultProps = {
  userIdToUpdate: undefined,
};
