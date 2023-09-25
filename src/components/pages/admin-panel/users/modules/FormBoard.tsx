
import mailIcon from '@icons/mail.svg';
import roleIcon from '@icons/role.svg';
import nameIcon from '@icons/name.svg';
import passwordIcon from '@icons/password.svg';
import lastNamesIcon from '@icons/lastNames.svg';
import controlNumberIcon from '@icons/controlNumber.svg';
import { Button, Form, Input, Select } from 'antd';
import { UserFormData } from '@interfaces/User';
import useForm from '@hooks/useForm';
import { initialUserInfo } from '@mocks/Users';
import useUsers from '@hooks/useUsers';
import { useEffect, useState } from 'react';
import { Role } from '@interfaces/Role';
import { RootState, useAppDispatch, useAppSelector } from '@app/store';
import { getRoles } from '@redux/thunks/roleThunk';
import { getUser } from '@redux/thunks/userThunk';

type FormBoardProps = {
  onClose: (callback?: () => void) => void;
  userControlNumberToUpdate?: string;
};

export default function FormBoard({
  userControlNumberToUpdate, onClose }: FormBoardProps) {
  const dispatch = useAppDispatch();

  const { handleCreateUser, handleUpdateUser, searchTerm } = useUsers();
  const [rolesData, setRolesData] = useState<Role[]>([]);
  const { data } = useAppSelector((state: RootState) => state.roleReducer);
  const [form] = Form.useForm();

  const handleCreateOrUpdateUser = (state: UserFormData) => {
    if (userControlNumberToUpdate) {
      handleUpdateUser({
        ...state,
        controlNumber: userControlNumberToUpdate,
      });
    } else {
      const userInfoToCreate: UserFormData = { ...state };
      delete userInfoToCreate.controlNumber;

      handleCreateUser(userInfoToCreate);
    }
    onClose();
  };

  const { errors, handleInputChange, handleSubmit, state, setState, reset } =
  useForm<UserFormData>(
    initialUserInfo,
    handleCreateOrUpdateUser,
  );

  useEffect(() => {
    if (userControlNumberToUpdate) {
      dispatch(getUser(userControlNumberToUpdate))
        .then((userData: UserFormData) => {
          setState({
            idUser: userData.idUser,
            name: userData.name,
            lastNames: userData.lastNames,
            controlNumber: userData.controlNumber,
            mail: userData.mail,
            password: userData.password,
            idRole: userData.idRole,
            token: userData.token,
            imageUrl: '',
          });
        }
        )
        .catch((error) => {
          console.error('Error fetching user details:', error.message);
        });
    }
  }, [dispatch, userControlNumberToUpdate, setState]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setRolesData(
        (data as Role[]).filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [data, searchTerm]);

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  useEffect(() => {
    form.validateFields(['controlNumber', 'name', 'lastNames', 'mail', 'role']);
  }, [form]);


  console.log('FormBoard userControlNumberToUpdate: ' + userControlNumberToUpdate)
  return (
    <Form form={form} initialValues={{ remember: true }}
      autoComplete="off"
      style={{ maxWidth: 600 }}
      layout="vertical">
      <div className="px-5 pt-3">
        <p className="text-black font-medium ">
          {userControlNumberToUpdate ? 'Editar Usuario' : 'Registro de Usuario'}
        </p>
      </div>
      <div className="px-5 pt-5">
        {/* NOMBRE */}
        <div className="flex items-start gap-2 w-80">
          <img className='mt-2 w-5' src={nameIcon} alt="Icono de nombre" />
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Por favor, ingresa los nombres', type: 'string' }]} style={{ width: '100%' }} >
            <Input type='text' id='name' value={state.name} placeholder='Nombre(s)' name='name' onChange={(event) => handleInputChange(event)} />
          </Form.Item>
        </div>
        {/* APELLIDOS */}
        <div className="flex items-start gap-2 ">
          <img className='mt-2 w-5' src={lastNamesIcon} alt="Icono de apellidos" />
          <Form.Item
            name="lastNames"
            rules={[{ required: true, message: 'Por favor, ingresa los apellidos', type: 'string' }]} style={{ width: '100%' }} >
            <Input type='text' id='lastNames' value={state.lastNames} placeholder='Apellidos' name='lastNames' onChange={(event) => handleInputChange(event)} />
          </Form.Item>
        </div>
        {/* NUMERO DE CONTROL */}
        <div className="flex items-start gap-2">
          <img className='mt-2 w-5' src={controlNumberIcon} alt="Icono de número de control" />
          <Form.Item
            name="controlNumber"
            rules={[{ required: true, message: 'Por favor, ingresa el número de control', type: 'string' }]} style={{ width: '100%' }} >
            <Input type='text' id='controlNumber' value={state.controlNumber} placeholder='Número de control' name='controlNumber' onChange={(event) => handleInputChange(event)} />
          </Form.Item>
        </div>
        {/* CORREO */}
        <div className="flex items-start gap-2">
          <img className='mt-2 w-5' src={mailIcon} alt="Icono de correo" />
          <Form.Item
            name="mail"
            rules={[{ required: true, message: 'Por favor, ingresa una dirección de correo', type: 'email' }]} style={{ width: '100%' }} >
            <Input type='email' id='mail' value={state.mail} placeholder='Correo electrónico' name='mail' onChange={(event) => handleInputChange(event)} />
          </Form.Item>
        </div>
        {/* ROL */}
        <div className="flex items-start gap-2 ">
          <img className='mt-2 w-5' src={roleIcon} alt="Icono de rol" />
          <Form.Item
            name="role"
            rules={[{ required: true, message: 'Por favor, selecciona un rol' }]} style={{ width: '100%' }} >
            <Select
              id='role'
              value={state.idRole}
              placeholder='Rol de usuario'
              onChange={(value) => setState({ ...state, idRole: value })}
            >
              {rolesData.map((role) => (
                <Select.Option key={role.idRole} value={role.idRole}>
                  {role.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        {/* CONTRASEÑA */}
        <div className="flex items-start gap-2">
          <img className='mt-2 w-5' src={passwordIcon} alt="Icono de contraseña" />
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor, ingresa una contraseña', type: 'string' }]} style={{ width: '100%' }} >
            <Input.Password type='password' id='password' value={state.password} placeholder='Contraseña' name='password' onChange={(event) => handleInputChange(event)} />
          </Form.Item>
        </div>
        <div className="flex justify-end center mt-2">
          <Form.Item>
            <Button
              className="bg-main_blue_dark"
              type="primary"
              size="large"
              onClick={handleSubmit}
            >
              Guardar
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form >
  );
}

FormBoard.defaultProps = {
  userControlNumberToUpdate: undefined,
};
