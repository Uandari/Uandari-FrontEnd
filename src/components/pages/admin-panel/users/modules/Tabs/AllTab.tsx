import Board from '../../board';
import imagenUsuario1 from '@assets/usersIcons/1.png';
import imagenUsuario2 from '@assets/usersIcons/2.png';
import imagenUsuario3 from '@assets/usersIcons/3.png';
import imagenUsuario4 from '@assets/usersIcons/4.png';
import imagenUsuario5 from '@assets/usersIcons/5.png';
import imagenUsuario6 from '@assets/usersIcons/6.png';
import imagenUsuario7 from '@assets/usersIcons/7.png';
import imagenUsuario8 from '@assets/usersIcons/8.png';
import imagenUsuario9 from '@assets/usersIcons/9.png';
import imagenUsuario10 from '@assets/usersIcons/10.png';
import { UsersListMock } from '@mocks/Users';
import RowBoard from '../RowBoard';

export default function AdministratorsTab() {
  const userImages = [
    imagenUsuario1,
    imagenUsuario2,
    imagenUsuario3,
    imagenUsuario3,
    imagenUsuario4,
    imagenUsuario5,
    imagenUsuario6,
    imagenUsuario7,
    imagenUsuario8,
    imagenUsuario9,
    imagenUsuario10,
  ];
  
  function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * userImages.length);
    return userImages[randomIndex];
  }


  const roleMap: Record<string, string> = {
    '1': 'Administrador',
    '2': 'Coordinador',
    '3': 'Team Leader',
    // Agrega más mapeos según sea necesario
  };

  return <Board>
   {UsersListMock.map((user) => (
          <RowBoard
            key={user.controlNumber}
            userName={`${user.name} ${user.lastNames}`}
            controlNumber={user.controlNumber}
            role={roleMap[user.idRole.toString()] || 'Rol predeterminado'}
            imageUrl={getRandomImageUrl()}
          />
        ))}
</Board>
}
