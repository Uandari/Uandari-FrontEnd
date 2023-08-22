import { useEffect } from 'react';

import UserIcon from '@icons/iconUser.svg';
import { Button, Form, Input, Select } from 'antd';

function FormBoard() {
  const rolesMock = [
    { value: 'Administrador', label: 'Administrador' },
    { value: 'Coordinador', label: 'Coordinador' },
    { value: 'Team Leader', label: 'Team Leader' },
  ];
  const linesMock = [
    { value: 'Cigueñal', label: 'Cigueñal' },
    { value: 'Monobloc', label: 'Monobloc' },
  ];
  const celulesMock = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
  ];
  const operationsMock = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
  ];
  const turnsMock = [
    { value: 'Turno A', label: 'Turno A' },
    { value: 'Turno B', label: 'Turno B' },
    { value: 'Turno C', label: 'Turno C' },
  ];

  useEffect(() => {}, []);
  return (
    <div className="w-[365px]">
      <div className="px-5 pt-3">
        <p className="text-main_text_color font-medium">Registro de usuario</p>
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
        <Form.Item>
          <div className="flex items-center gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Select defaultValue={linesMock[0].label} options={linesMock} />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex items-center gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Select defaultValue={celulesMock[0].label} options={celulesMock} />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex items-center gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Select
              defaultValue={operationsMock[0].label}
              options={operationsMock}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex items-center gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Select defaultValue={turnsMock[0].label} options={turnsMock} />
          </div>
        </Form.Item>
        <div className="flex justify-end">
          <Form.Item>
            <Button
              className="bg-[#1677ff]"
              htmlType="submit"
              type="primary"
              size="large"
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
