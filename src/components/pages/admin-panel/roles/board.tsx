/* eslint-disable import/extensions */
import { Button, Form, Input, Popover } from 'antd';

import FormBoard from './modules/FormBoard';
import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';

export default function Board() {
  const user1 = {
    _06: '6:00 - 7:00',
    _07: '7:00 - 8:00',
    _08: '8:00 - 9:00',
    _09: '9:00 - 10:00',
    _10: '10:00 - 11:00',
    _11: '11:00 - 12:00',
    _12: '12:00 - 13:00',
    _13: '13:00 - 14:00',
  };

  return (
    <div className="h-full grid grid-rows-[7] ">
      <div className="flex justify-between items-center px-4 border-b border-t border-main_color">
        <div className="flex items-center gap-2">
          <Form className="w-[400px] text-center  mt-5 ">
            <div className="mb-4 w-full">
              <Form.Item>
                <Input size="large" placeholder="Buscar usuario" />
              </Form.Item>
            </div>
          </Form>
        </div>
        <Popover placement="leftTop" trigger="click" content={<FormBoard />}>
          <Button
            size="large"
            className=" text-base bg-main_blue_dark text-main_white rounded-lg font-medium"
          >
            Registrar nuevo usuario
          </Button>
        </Popover>
      </div>
      <div className="row-span-1">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto row-span-6 hide-scrollbar">
        {Object.values(user1).map((hour: string) => {
          return <RowBoard roleName="Administrador" />;
        })}
      </div>
    </div>
  );
}
