import controlNumberIcon from '@icons/controlNumber.svg';
import UserIcon from '@icons/iconUser.svg';
import roleIcon from '@icons/role.svg';
import { Button, Form, Input, Select } from 'antd';

type FormBoardProps = {
  userIdToUpdate?: number;
};

function FormBoard({ userIdToUpdate }: FormBoardProps) {
  const rolesMock = [
    { value: 1, label: 'Gerente' },
    { value: 2, label: 'Administrador' },
    { value: 3, label: 'Coordinador' },
    { value: 4, label: 'Team Leader' },
    { value: 5, label: 'Visualizador' },
  ];

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
