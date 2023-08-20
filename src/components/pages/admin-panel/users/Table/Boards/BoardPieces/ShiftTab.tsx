import { Button, Form, Input, Popover } from "antd";
import FormBoard from "./FormBoard";

function ShiftTab() {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-main_color">
      <div className="flex items-center gap-2">
      <Form className="w-[400px] text-center mt-6">
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
              className=" text-base bg-main_blue_dark text-main_white rounded-lg font-medium hover:text-  "
            >
              Registrar nuevo usuario
            </Button>
        </Popover>
            
    </div>
  );
}

export default ShiftTab;
