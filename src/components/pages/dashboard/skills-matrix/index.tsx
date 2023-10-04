import { useState } from 'react';

import Topbar from '@components/layout/topbar';
import { shiftsLabels } from '@mocks/Shifts';
import { usersSkills } from '@mocks/UsersSkills';
import { Select } from 'antd';

import UserRow from './UserRow';

function SkillsMatrix() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = usersSkills.filter((user) => {
    const fullName = `${user.fullname}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Topbar title="Matriz de habilidades" underline />
      <div className="flex flex-1 flex-col overflow-y-scroll">
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
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsMatrix;
