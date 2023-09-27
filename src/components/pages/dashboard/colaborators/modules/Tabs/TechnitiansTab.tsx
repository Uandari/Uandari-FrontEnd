import { useState } from 'react';

import imagenUsuario1 from '@assets/usersIcons/1.png';
import { TechnitiansListMock } from '@mocks/Technitian';

import Board from '../../boardTechnitian';
import RowBoard from '../boardTechnitian/RowBoard';

export default function TechnitiansTab() {
  const [searchTerm] = useState('');

  const filteredUsers = TechnitiansListMock.filter((user) => {
    const fullName = `${user.name} ${user.lastNames}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Board>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((technitian) => (
          <RowBoard
            key={technitian.controlNumber}
            userName={`${technitian.name} ${technitian.lastNames}`}
            controlNumber={technitian.controlNumber}
            cell={technitian.cell}
            line={technitian.line}
            motor={technitian.motor}
            operation={technitian.operation}
            shift={technitian.shift}
            imageUrl={imagenUsuario1}
          />
        ))
      ) : (
        <div className="text-center text-xl mt-28 text-gray">
          No se encontraron técnicos
        </div>
      )}
    </Board>
  );
}
