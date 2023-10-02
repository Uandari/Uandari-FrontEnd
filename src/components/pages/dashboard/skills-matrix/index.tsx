import { useState } from 'react';

import Topbar from '@components/layout/topbar';
import { shiftsLabels } from '@mocks/Shifts';
import { usersSkills } from '@mocks/UsersSkills';
import { Select } from 'antd';

import UserRow from './UserRow';
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

function SkillsMatrix() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = usersSkills.filter((user) => {
    const fullName = `${user.fullname}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Topbar variant="secondary" title="Matriz de habilidades" />
      <div className="flex flex-1 flex-col overflow-y-scroll border-t">
        <div className="py-6 border-b flex items-center justify-end pr-8 gap-x-4 ">
          <input
            placeholder="Buscar usuario"
            className="border border-main_color pl-4 w-[350px] py-1 rounded-md outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            showSearch
            placeholder="Seleccionar habilidades"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={shiftsLabels}
          />
          <Select
            showSearch
            placeholder="Seleccionar célula"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={shiftsLabels}
          />
        </div>
        {filteredUsers.map((user) => (
          <UserRow
            id={user.id}
            fullname={user.fullname}
            controlNumber={user.controlNumber}
            skills={user.skills}
            key={user.id}
            image={getRandomImageUrl()}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsMatrix;
