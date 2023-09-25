import { Form, Input } from 'antd';
import HeadBoard from './modules/boardColaborators/HeadBoard';


export type BoardProps = {
  children: React.ReactNode;
};

export default function Board({ children }: BoardProps) {
  return (
    <div className="h-full grid grid-rows-[2]">
      <div className="flex justify-between items-center px-4 border-b border-main_color">
        <div className="flex items-center gap-2">
          <Form className="w-[400px] text-center mt-2">
            <div className="mb-4 w-full">
              <Form.Item>
                <Input
                  size="large"
                  placeholder="Buscar Colaborador"
                />
              </Form.Item>
            </div>
          </Form>
        </div>
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
