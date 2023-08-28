
import LoginBackground from '@assets/login_img.svg';
import UandariColorLogo from '@assets/uandari-color-logo.svg';
import VolkswagenColorLogo from '@assets/volkswagen-logo-color.svg';
import { DASHBOARD_MAIN } from '@routes/paths';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(DASHBOARD_MAIN);
  };

  return (
    <div className="grid grid-cols-2 relative bg-white h-full overflow-hidden">
      <div className="flex items-center absolute top-12 left-12 ">
        <img
          src={UandariColorLogo}
          alt="Uandari Project logo"
          className="w-8"
        />
        <h1 className="text-base font-semibold text-main_blue_dark ml-4">
          Shopfloor Management
        </h1>
      </div>
      <div className="flex flex-col w-auto items-center justify-center px-10 col-span-1 ">
        <img
          src={VolkswagenColorLogo}
          alt="Volkswagen Logo"
          className="w-18 mb-4"
        />
        <div className="w-[420px]">
          <h1 className="text-3xl font-semibold text-center mb-2 text-main_blue_dark">
            Iniciar sesión
          </h1>
          <p className="text-base text-center text-main_gray">
            Ingresa los siguientes datos para acceder al sistema Shopfloor
            Management
          </p>
        </div>

        <Form className="w-[400px] text-center mt-6">
          <div className="mb-4 w-full">
            <Form.Item>
              <Input size="large" placeholder="Número de control" />
            </Form.Item>
            <Form.Item>
              <Input size="large" placeholder="Contraseña"  type='password'/>
            </Form.Item>
          </div>

          <div className="mb-6 flex items-center justify-center">
            <Button
              onClick={handleSubmit}
              size="large"
              className="w-full text-base bg-main_blue_dark text-main_white rounded-lg font-medium hover:text-  "
            >
              Iniciar sesión
            </Button>
          </div>
        </Form>
      </div>
      <div className="col-span-1 bg-main_blue_bg flex justify-center items-center flex-col">
        <img src={LoginBackground} alt="Background" className="w-[60%]" />
        <div className="pl-12 pt-8">
          <h3 className="text-main_title_color text-2xl font-medium">
            ¡Bienvenido de nuevo!
          </h3>
          <p className="text-main_text_color w-[80%] text-sm">
            Te ayudamos a mejorar la eficiencia de tus procesos al automatizar
            tareas, mejorar la comunicación y la colaboración, además te
            proporcionamos información en tiempo real sobre el rendimiento.
          </p>
        </div>
      </div>
    </div>
  );
}
