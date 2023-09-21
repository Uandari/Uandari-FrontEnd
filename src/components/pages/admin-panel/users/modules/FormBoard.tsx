import useForm from '@hooks/useForm';
import useUsers from '@hooks/useUsers';
import controlNumberIcon from '@icons/controlNumber.svg';
import UserIcon from '@icons/iconUser.svg';
import roleIcon from '@icons/role.svg';
import { User } from '@interfaces/User';
import { initialUserInfo } from '@mocks/Users';
import { Button, Form, Input, Select } from 'antd';

import {
  usersCreateValidation,
  usersUpdateValidations,
} from '../../../../../formValidations/usersValidations';

type FormBoardProps = {
  onClose: (callback?: () => void) => void;
  userIdToUpdate?: number;
};

function FormBoard({ onClose, userIdToUpdate }: FormBoardProps) {
  const rolesMock = [
    { value: 1, label: 'Gerente' },
    { value: 2, label: 'Administrador' },
    { value: 3, label: 'Coordinador' },
    { value: 4, label: 'Team Leader' },
    { value: 5, label: 'Visualizador' },
  ];

  const handleCreateOrUpdateUser = (state: User) => {
    const userModifiable = { ...state };

    const { handleCreateUser, handleUpdateUser } = useUsers();

    if (userIdToUpdate) {
      handleUpdateUser({
        ...userModifiable,
        id: userIdToUpdate,
      });
    } else {
      const userInfoToCreate: User = { ...state };
      delete userInfoToCreate.id;

      handleCreateUser(userInfoToCreate);
    }
    onClose();
  };

  const { errors, handleInputChange, handleSubmit, state, setState, reset } =
    useForm<User>(
      initialUserInfo,
      userIdToUpdate ? usersUpdateValidations : usersCreateValidation,
      handleCreateOrUpdateUser,
    );

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
            <img src={controlNumberIcon} alt="problemType-icon" />
            <Input
              placeholder="Número de control"
              id="controlNumber"
              value={state.controlNumber}
              name="controlNumber"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex items-start gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Input
              placeholder="Nombre"
              id="name"
              value={state.name}
              name="name"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex items-start gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Input
              placeholder="Apellidos"
              id="lastnames"
              value={state.lastnames}
              name="lastnames"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex items-center gap-2">
            <img src={roleIcon} alt="problemType-icon" />
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
              onClick={handleSubmit}
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
