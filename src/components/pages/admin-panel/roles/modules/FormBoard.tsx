import { useEffect } from 'react';

import UserIcon from '@icons/iconUser.svg';
import { Button, Form, Input } from 'antd';

function FormBoard() {
  useEffect(() => {}, []);
  return (
    <div className="w-[365px]">
      <div className="px-5 pt-3">
        <p className="text-main_text_color font-medium">Registro de Rol</p>
      </div>
      <div className="pt-6">
        <Form.Item>
          <div className="flex items-start gap-2">
            <img src={UserIcon} alt="problemType-icon" />
            <Input placeholder="Nombre del rol" />
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
