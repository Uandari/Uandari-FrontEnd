import CalendarIcon from '@assets/icons/calender.svg';
import CategoryIcon from '@assets/icons/categoryIcon.svg';
import ClockIcon from '@assets/icons/clockIcon.svg';
import DescriptionIcon from '@assets/icons/description.svg';
import QuantityIcon from '@assets/icons/quantity.svg';
import SolutionIcon from '@assets/icons/solution.svg';
import {
  Drawer,
  Space,
  Button,
  Row,
  Col,
  Input,
  Select,
  DatePicker,
  Form,
} from 'antd';

export type DrawerComponentProps = {
  onClose: () => void;
  open: boolean;
};

function DrawerComponent({ open, onClose }: DrawerComponentProps) {
  return (
    <div>
      <Drawer
        title="Detalle problema"
        width={620}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button
              onClick={onClose}
              type="primary"
              className="bg-main_blue_dark"
            >
              Guardar
            </Button>
          </Space>
        }
      >
        <div>
          <div className="flex items-start gap-9 justify-between">
            <div>
              <h2 className="text-main_title_color font-medium text-2xl">
                Nombre del problema
              </h2>
              <div className="flex gap-x-2 items-center mt-2">
                <img src={CategoryIcon} alt="category-icon" />
                <p className="text-main_text_color text-xs">
                  Área a la que pertenece
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={CalendarIcon} alt="calendar-icon" />
              <p className="text-main_text_color">08/22/2023</p>
            </div>
          </div>

          <div className="mt-4 flex items-start justify-between">
            <div>
              <p className="text-main_text_color">Involucrado 1</p>
              <p className="text-main_text_color">Involucrado 2</p>
              <p className="text-main_text_color">Involucrado 3</p>
            </div>
            <div>
              <p className="text-main_text_color">Fecha estimada de solución</p>
              <div className="flex items-center justify-end gap-2">
                <img src={ClockIcon} alt="clock-icon" />
                <p className="font-medium text-main_text_color">10/22/2023</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-x-5 items-start">
            <img className="w-5" src={DescriptionIcon} alt="description-icon" />
            <p className="text-main_text_color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="mt-10 flex gap-x-5 items-start">
            <img className="w-5" src={SolutionIcon} alt="description-icon" />
            <p className="text-main_text_color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="mt-10 flex gap-x-5 items-start">
            <img className="w-5" src={QuantityIcon} alt="description-icon" />
            <p className="text-main_text_color font-medium">
              13 motores producidos de 20
            </p>
          </div>
          <p className="text-main_text_color mt-8">Estado del problema</p>
          <Select
            placeholder="Selecciona el estado del problema"
            className="w-full"
            showSearch
            optionFilterProp="children"
            options={[
              {
                value: 'IN_PROCESS',
                label: 'En proceso',
              },
              {
                value: 'FIXED',
                label: 'Solucionada',
              },
              {
                value: 'ESCALATED',
                label: 'Escalar problema',
              },
            ]}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
