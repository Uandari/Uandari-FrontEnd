import OptionsIcon from '@assets/icons/bulletsButton.svg';
import UserImage from '@assets/usersIcons/6.png';
import { Button, Drawer, Popover, Space } from 'antd';

type DrawerComponentProps = {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  openDrawer: boolean;
};

export default function DrawerComponent({
  setOpenDrawer,
  openDrawer,
}: DrawerComponentProps) {
  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer
      title="Editar habilidades"
      placement="right"
      width={500}
      onClose={onClose}
      open={openDrawer}
      extra={
        <Space>
          <Button onClick={onClose}>Cancelar</Button>
          <Button className="bg-main_blue_dark text-white" onClick={onClose}>
            Guardar
          </Button>
        </Space>
      }
    >
      <div>
        <div className="flex gap-x-2 items-center mb-6">
          <img className="w-12" src={UserImage} alt="img-user" />
          <div>
            <p className="text-main_title_color font-medium text-lg">
              Nombre de usuario
            </p>
            <p className="text-main_text_color text-sm">
              Número de control: 12334
            </p>
          </div>
        </div>
        <div className="border-b py-3 relative">
          <p className="text-main_title_color font-medium">
            Nombre de habilidad
          </p>
          <p className="text-main_text_color">Nivel 1</p>
          <Popover
            trigger="click"
            placement="left"
            content={
              <div className="flex flex-col gap-y-2">
                <button
                  className="px-3 py-1 hover:bg-slate-100 rounded-md text-left  "
                  type="button"
                >
                  Capacitacion y adiestramiento
                </button>
                <button
                  className="px-3 py-1 hover:bg-slate-100 rounded-md text-left"
                  type="button"
                >
                  Capacitacion y adiestramiento
                </button>
                <button
                  className="px-3 py-1 hover:bg-slate-100 rounded-md text-left"
                  type="button"
                >
                  Capacitacion y adiestramiento
                </button>
                <button
                  className="px-3 py-1 hover:bg-red-100 rounded-md text-left"
                  type="button"
                >
                  Eliminar
                </button>
              </div>
            }
          >
            <button className="absolute top-3 right-2" type="button">
              <img src={OptionsIcon} alt="options-icon" />
            </button>
          </Popover>
        </div>
      </div>
    </Drawer>
  );
}
