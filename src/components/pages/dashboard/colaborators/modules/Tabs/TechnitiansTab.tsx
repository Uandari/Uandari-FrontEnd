import imagenUsuario1 from '@assets/usersIcons/1.png';
import imagenUsuario10 from '@assets/usersIcons/10.png';
import imagenUsuario2 from '@assets/usersIcons/2.png';
import imagenUsuario3 from '@assets/usersIcons/3.png';
import imagenUsuario4 from '@assets/usersIcons/4.png';
import imagenUsuario5 from '@assets/usersIcons/5.png';
import imagenUsuario6 from '@assets/usersIcons/6.png';
import imagenUsuario7 from '@assets/usersIcons/7.png';
import imagenUsuario8 from '@assets/usersIcons/8.png';
import imagenUsuario9 from '@assets/usersIcons/9.png';
import { TechnitiansListMock } from '@mocks/Technitian';

import Board from '../../boardTechnitian';
import RowBoard from '../boardTechnitian/RowBoard';

export default function TechnitiansTab() {
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

  return (
    <Board>
      {TechnitiansListMock.map((technitian) => (
        <RowBoard
          key={technitian.controlNumber}
          userName={`${technitian.name} ${technitian.lastNames}`}
          controlNumber={technitian.controlNumber}
          // eslint-disable-next-line jsx-a11y/aria-role
          celule={technitian.celule}
          line={technitian.line}
          motor={technitian.motor}
          operation={technitian.operation}
          shift={technitian.shift}
          imageUrl={getRandomImageUrl()}
        />
      ))}
    </Board>
  );
}
