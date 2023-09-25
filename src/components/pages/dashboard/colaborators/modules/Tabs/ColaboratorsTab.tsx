import { useState } from 'react';

import imagenUsuario1 from '@assets/usersIcons/1.png';
import { UsersListMock } from '@mocks/Users';

import Board from '../../boardColaborators';
import RowBoard from '../boardColaborators/RowBoard';

export default function ColaboratorsTab() {
  const [searchTerm] = useState('');

  const filteredUsers = UsersListMock.filter((user) => {
    const fullName = `${user.name} ${user.lastnames}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Board>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <RowBoard
            key={user.controlNumber}
            userName={`${user.name} ${user.lastnames}`}
            controlNumber={user.controlNumber}
            role={user.role}
            imageUrl={imagenUsuario1}
          />
        ))) : (
        <div className="text-center text-xl mt-28 text-gray">
          No se encontraron colaboradores
        </div>
      )}
    </Board>
  );

}

