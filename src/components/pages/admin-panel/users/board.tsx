import { RootState, useAppSelector } from '@app/store';
import CircleProgressIndicator from '@components/basic/circle_progress_indicator';
import { UsersListMock } from '@mocks/Users';
import userImage from '@usersIcons/1.png';
import { Button, Form, Input, Popover } from 'antd';

import FormBoard from './modules/FormBoard';
import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';

export default function Board() {
  const { loading } = useAppSelector((state: RootState) => state.userReducer);

  if (loading) {
    return (
      <div className="mt-52">
        <CircleProgressIndicator />;
      </div>
    );
  }

  return (
    <div className="h-full grid grid-rows-[7]">
      <div className="flex justify-between items-center px-4 border-b border-main_color">
        <div className="flex items-center gap-2">
          <Form className="w-[400px] text-center mt-2">
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
        {UsersListMock.map((user) => (
          <RowBoard
            userName={`${user.name} ${user.lastNames}`}
            userImage={userImage}
          />
        ))}
      </div>
    </div>
  );
}
