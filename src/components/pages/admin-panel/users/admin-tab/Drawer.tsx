import { useEffect, useState } from 'react';

import { useAppDispatch } from '@app/store';
import { userImages } from '@constants/images';
import useUsers from '@hooks/useUsers';
import { Administrator } from '@interfaces/Admin';
import { initialUserInfo } from '@mocks/Admin';
import { getUser } from '@redux/thunks/userThunk';
import { Button, Drawer, Space } from 'antd';

type DrawerComponentProps = {
  open: boolean;
  onClose: () => void;
  userControlNumberToUpdate?: string;
};

export default function DrawerComponent({
  open,
  onClose,
  userControlNumberToUpdate,
}: DrawerComponentProps) {
  const dispatch = useAppDispatch();
  const [errorFields, setErrorFields] = useState('');
  const [userData, setUserData] = useState<Administrator>(initialUserInfo);

  const { handleCreateUser, handleUpdateUser } = useUsers();

  const handleImageClick = (image: string) => {
    setUserData({
      ...userData,
      imageUrl: image,
    });
  };

  const handleCreateOrUpdateUser = () => {
    const isAnyFieldEmpty = Object.values(userData).some(
      (value) => value === '',
    );

    if (isAnyFieldEmpty) {
      setErrorFields('No puedes dejar campos vacíos');
      console.log(userData);
      setTimeout(() => {
        setErrorFields('');
      }, 3000);
      return;
    }

    if (userControlNumberToUpdate) {
      handleUpdateUser(userData);
    } else {
      const userModifiable = { ...userData };
      userModifiable.role = 1;
      delete userModifiable.idUser;
      console.log(userModifiable);
      // handleCreateUser(userData);
    }
    // onClose();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (userControlNumberToUpdate) {
      dispatch(getUser(userControlNumberToUpdate))
        .then((user: Administrator) => {
          setUserData({
            idUser: user.idUser,
            name: user.name,
            lastNames: user.lastNames,
            controlNumber: user.controlNumber,
            role: user.role,
            imageUrl: user.imageUrl,
          });
        })
        .catch((error) => {
          console.error('Error fetching user details:', error.message);
        });
    }
  }, [dispatch, userControlNumberToUpdate]);
  return (
    <Drawer
      title={`${
        userControlNumberToUpdate
          ? 'Actualizar adminstrador'
          : 'Crear administrador'
      }`}
      closeIcon={false}
      width={650}
      open={open}
      extra={
        <Space>
          <Button onClick={onClose}>Cancelar</Button>
          <Button
            onClick={handleCreateOrUpdateUser}
            className="bg-main_blue_dark text-main_blue_bg"
          >
            {userControlNumberToUpdate ? 'Guardar cambios' : 'Crear'}
          </Button>
        </Space>
      }
    >
      {errorFields.length > 0 && (
        <p className="text-red-500 font-medium pb-4">{errorFields}</p>
      )}
      <form className="flex flex-col gap-y-6">
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <p className="text-main_text_color text-sm">Nombre</p>
            <input
              name="name"
              value={userData?.name}
              className="form-input"
              placeholder="Nombre de administrador"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <p className="text-main_text_color text-sm">Apellidos</p>
            <input
              name="lastnames"
              value={userData?.lastNames}
              className="form-input"
              placeholder="Apellidos de administrador"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        <div>
          <p className="text-main_text_color text-sm">Número de control</p>
          <input
            name="controlNumber"
            value={userData?.controlNumber}
            className="form-input"
            placeholder="Número de control de administrador"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div>
          <p className="text-main_text_color text-sm">
            Contraseña {`${userControlNumberToUpdate ? '(opcional)' : ''}`}
          </p>
          <input
            name="password"
            type="password"
            value={userData?.password}
            className="form-input"
            placeholder="Contraseña de usuario"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div>
          <p className="text-main_text_color text-sm">Rol</p>
          <input
            disabled
            name="role"
            value={userData?.role}
            className="form-input"
            placeholder="Administrador"
          />
        </div>

        <div>
          <p className="text-main_text_color text-sm">Avatares</p>
          <div className="avatar-list flex flex-wrap">
            {userImages.map((image) => (
              <button
                type="button"
                key={image.id}
                className={`w-16 avatar-item ${
                  userData.imageUrl === image.url ? 'selected' : ''
                }`}
                onClick={() => handleImageClick(image.url)}
              >
                <img src={image.image} alt={`Avatar ${image.id}`} />
              </button>
            ))}
          </div>
        </div>
      </form>
    </Drawer>
  );
}

DrawerComponent.defaultProps = {
  userControlNumberToUpdate: undefined,
};
