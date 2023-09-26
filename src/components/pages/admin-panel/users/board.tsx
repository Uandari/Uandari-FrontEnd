import useUsers from '@hooks/useUsers';
import { Button, Form, Input, Popover } from 'antd';

import FormBoard from './modules/FormBoard';
import HeadBoard from './modules/HeadBoard';
import { UserFetched } from '@interfaces/User';

export type BoardProps = {
  children: React.ReactNode;
  isModalOpenToUpdate: boolean,
};

export default function Board({ children, isModalOpenToUpdate }: BoardProps) {
  const {
    handleCloseModal,
    selectedUser,
    searchTerm,
    handleInputChange,
    setSelectedUser,
    setIsModalOpenToUpdate
  } = useUsers();

  const handleClose = (callback?: () => void) => {
    handleCloseModal();
    if (callback) {
      callback();
    }
  };

  console.log(isModalOpenToUpdate)
  console.log(selectedUser)

  return (
    <div className="h-full grid grid-rows-[7]">
      <div className="flex justify-between items-center px-4 border-b border-main_color">
        <div className="flex items-center gap-2">
          <Form className="w-[400px] text-center mt-2">
            <div className="mb-4 w-full">
              <Form.Item>
                <Input
                  type='text'
                  id='search'
                  name='search'
                  size="large"
                  placeholder="Buscar usuario por nombre"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </div>
          </Form>
        </div>
        <Popover
          placement="leftTop"
          trigger="click"
          content={
            (isModalOpenToUpdate ? (
              <FormBoard userControlNumberToUpdate={selectedUser?.controlNumber} onClose={handleClose} />
            ) : (
              <FormBoard onClose={handleClose} />
            ) )
          }
        >
          <Button
            size="large"
            className=" text-base bg-main_blue_dark  text-main_white rounded-lg mb-4  font-medium"
          >
            Registrar nuevo usuario
          </Button>
        </Popover>
      </div>
      <div className="row-span-1">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
        {children}
      </div>
    </div>

  );
}
