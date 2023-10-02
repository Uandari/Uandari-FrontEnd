import { useState } from 'react';

import { UsersListMock } from '@mocks/Users';
import imagenUsuario1 from '@assets/usersIcons/user_1.png';
import imagenUsuario2 from '@assets/usersIcons/user_10.png';
import imagenUsuario3 from '@assets/usersIcons/user_11.png';
import imagenUsuario4 from '@assets/usersIcons/user_12.png';
import imagenUsuario5 from '@assets/usersIcons/user_13.png';
import imagenUsuario6 from '@assets/usersIcons/user_15.png';
import imagenUsuario7 from '@assets/usersIcons/user_2.png';
import imagenUsuario8 from '@assets/usersIcons/user_3.png';
import imagenUsuario9 from '@assets/usersIcons/user_4.png';
import imagenUsuario10 from '@assets/usersIcons/user_5.png';

import RowBoard from '../../RowBoard';

export default function ColaboratorsTab() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = UsersListMock.filter((user) => {
    const fullName = `${user.name} ${user.lastNames}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

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

    <div className="w-full flex-grow flex-1">
      <div className="mb-4 ml-6">
        <input
          placeholder="Buscar usuario"
          className="border border-main_color pl-4 w-[350px] py-2 rounded-md outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 border-y border-main_color py-2">
        <p className="pl-12 font-medium text-main_gray">Nombre completo</p>
        <p className="pl-12 font-medium text-main_gray">Número de control</p>
      </div>
      <div>
        {filteredUsers.map((user) => (
          <RowBoard
            key={user.controlNumber}
            userName={`${user.name} ${user.lastNames}`}
            controlNumber={user.controlNumber}
            role={user.role}
            imageUrl={getRandomImageUrl()}
          />
        ))}
      </div>
    </div>
  );
}