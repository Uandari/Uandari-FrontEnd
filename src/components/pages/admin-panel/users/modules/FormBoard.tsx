import useForm from '@hooks/useForm';
import useUsers from '@hooks/useUsers';
import controlNumberIcon from '@icons/controlNumber.svg';
import UserIcon from '@icons/iconUser.svg';
import roleIcon from '@icons/role.svg';
import { User } from '@interfaces/User';
import { initialUserInfo } from '@mocks/Users';
import useUsers from '@hooks/useUsers';
import { usersCreateValidation, usersUpdateValidations } from '../../../../../formValidations/usersValidations';
import { useEffect } from 'react';

type FormBoardProps = {
  onClose: (callback?: () => void) => void;
  userIdToUpdate?: number;
};

function FormBoard({ onClose,
  userIdToUpdate, }: FormBoardProps) {

  const { handleCreateUser, handleUpdateUser } = useUsers();

  const handleCreateOrUpdateUser = (state: User) => {
    const userModifiable = { ...state };

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
  const { handleInputChange, handleSubmit, state, setState } =
    useForm<User>(
      initialUserInfo,
      userIdToUpdate ? usersUpdateValidations : usersCreateValidation,
      handleCreateOrUpdateUser,
    );

  const [form] = Form.useForm();

  useEffect(() => {
    form.validateFields(['controlNumber', 'name', 'lastNames']);
  }, [form]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form form={form} initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ maxWidth: 600 }}
      layout="vertical">
      <div className="px-5 pt-3">
        <p className="text-black font-medium ">
          {userIdToUpdate ? 'Editar Usuario' : 'Registro de Usuario'}
        </p>
      </div>
      <div className="px-5 pt-5">
        {/* NOMBRE */}
        <div className="flex items-start gap-2 w-80">
          <img className='mt-2 w-5' src={UserIcon} alt="Icono de nombre" />
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Por favor, ingresa los nombres' }]} style={{ width: '100%' }} >
            <Input type='text' id='name' value={state.name} placeholder='Nombre(s)' name='name' onChange={(event) => handleInputChange(event)} />
          </Form.Item>
        </div>
        {/* APELLIDOS */}
        <div className="flex items-start gap-2 ">
          <img className='mt-2 w-5' src={UserIcon} alt="Icono de apellidos" />
          <Form.Item
            name="lastNames"
            rules={[{ required: true, message: 'Por favor, ingresa los apellidos' }]} style={{ width: '100%' }} >
            <Input type='text' id='lastNames' value={state.lastNames} placeholder='Apellidos' name='lastNames' onChange={(event) => handleInputChange(event)} />
          </Form.Item>
        </div>
        {/* NUMERO DE CONTROL */}
        <div className="flex items-start gap-2">
          <img className='mt-2 w-5' src={controlNumberIcon} alt="Icono de número de control" />
          <Form.Item
            name="controlNumber"
            rules={[{ required: true, message: 'Por favor, ingresa el número de control' }]} style={{ width: '100%' }} >
            <Input type='text' id='controlNumber' value={state.controlNumber} placeholder='Número de control' name='controlNumber' onChange={(event) => handleInputChange(event)} />
          </Form.Item>
        </div>
        {/* ROL */}
        <div className="flex items-start gap-2 ">
          <img className='mt-2 w-5' src={roleIcon} alt="Icono de rol" />
          <Form.Item
            name="role"
            rules={[{ required: true, message: 'Por favor, selecciona un rol' }]} style={{ width: '100%' }} >
            <Select id='role' value={state.role} placeholder='Rol de usuario' onChange={(value) => setState({ ...state, role: value })}> 
            {roles.map((role) => (
              <Select.Option key={role} value={role}>
                {role}
              </Select.Option>
            ))}</Select>
          </Form.Item>
        </div>
        <div className="flex justify-end center mt-2">
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
    </Form>
  );
}

export default FormBoard;

FormBoard.defaultProps = {
  userIdToUpdate: undefined,
};
