import { useState } from 'react';

import imagenUsuario1 from '@assets/usersIcons/1.png';
import { UsersListMock } from '@mocks/Users';

import RowBoard from '../../RowBoard';

export default function ColaboratorsTab() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = UsersListMock.filter((user) => {
    const fullName = `${user.name} ${user.lastnames}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
            userName={`${user.name} ${user.lastnames}`}
            controlNumber={user.controlNumber}
            role={user.role}
            imageUrl={imagenUsuario1}
          />
        ))}
      </div>
    </div>
  );
}