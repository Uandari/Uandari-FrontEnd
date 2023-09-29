import { useState } from 'react';

import imagenUsuario1 from '@assets/usersIcons/1.png';
import { TechnitiansListMock } from '@mocks/Technitian';

import RowBoard from '../boardTechnitian/RowBoard';

export default function TechnitiansTab() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = TechnitiansListMock.filter((user) => {
    const fullName = `${user.name} ${user.lastNames}`;
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
      <div className="grid grid-cols-8 gap-x-6 w-full border-y border-main_color py-2 ">
        <p className="font-medium text-main_gray col-span-2 pl-12">
          Colaborador
        </p>
        <p className="font-medium text-main_gray">Número de control</p>
        <p className="font-medium text-main_gray">Motor</p>
        <p className="font-medium text-main_gray">Línea</p>
        <p className="font-medium text-main_gray">Célula</p>
        <p className="font-medium text-main_gray">Operación</p>
        <p className="font-medium text-main_gray">Turno</p>
      </div>
      <div>
        {filteredUsers.map((technitian) => (
          <RowBoard
            key={technitian.controlNumber}
            userName={`${technitian.name} ${technitian.lastNames}`}
            controlNumber={technitian.controlNumber}
            // eslint-disable-next-line jsx-a11y/aria-role
            cell={technitian.cell}
            line={technitian.line}
            motor={technitian.motor}
            operation={technitian.operation}
            shift={technitian.shift}
            imageUrl={imagenUsuario1}
          />
        ))}
      </div>
    </div>
  );
}