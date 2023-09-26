import { useState } from 'react';

import UserImage from '@assets/usersIcons/6.png';
import { levelsLabels } from '@mocks/Levels';
import { skillsLabels } from '@mocks/Skills';
import { Button, Drawer, Select, Space } from 'antd';

import SkillTab from './SkillTab';

type DrawerComponentProps = {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  openDrawer: boolean;
  user: {
    id: number;
    fullname: string;
    controlNumber: number;
    skills: {
      name: string;
      level: string;
    }[];
  };
};

export default function DrawerComponent({
  setOpenDrawer,
  openDrawer,
  user,
}: DrawerComponentProps) {
  const [userDetail, setUserDetail] = useState(user);
  const [selectedSkill, setSelectedSkill] = useState(''); // Estado para la habilidad seleccionada
  const [selectedLevel, setSelectedLevel] = useState(''); // Estado para el nivel seleccionado

  const handleLevelChange = (newLevel: string, skillIndex: number) => {
    const updatedSkills = [...userDetail.skills]; // Crear una copia del array de habilidades
    updatedSkills[skillIndex].level = newLevel; // Actualizar el nivel de habilidad
    setUserDetail({ ...userDetail, skills: updatedSkills }); // Actualizar el estado local del usuario
  };

  const handleDeleteSkill = (skillIndex: number) => {
    const updatedSkills = [...userDetail.skills];
    updatedSkills.splice(skillIndex, 1); // Eliminar la habilidad en el índice dado
    setUserDetail({ ...userDetail, skills: updatedSkills });
  };

  const handleAddSkill = () => {
    if (selectedSkill && selectedLevel) {
      const newSkill = { name: selectedSkill, level: selectedLevel };
      const updatedSkills = [...userDetail.skills, newSkill];
      setUserDetail({ ...userDetail, skills: updatedSkills });

      // Reiniciar los estados de los Select después de agregar la habilidad
      setSelectedSkill('');
      setSelectedLevel('');
    }
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer
      title="Editar habilidades"
      placement="right"
      width={500}
      onClose={onClose}
      open={openDrawer}
      extra={
        <Space>
          <Button onClick={onClose}>Cancelar</Button>
          <Button className="bg-main_blue_dark text-white" onClick={onClose}>
            Guardar
          </Button>
        </Space>
      }
    >
      <div>
        <div className="flex gap-x-2 items-center mb-6">
          <img className="w-12" src={UserImage} alt="img-user" />
          <div>
            <p className="text-main_title_color font-medium text-lg">
              {userDetail.fullname}
            </p>
            <p className="text-main_text_color text-sm">
              Número de control: {userDetail.controlNumber}
            </p>
          </div>
        </div>
        {userDetail.skills.map((skill, index) => (
          <SkillTab
            skill={skill}
            skillIndex={index}
            handleDeleteSkill={handleDeleteSkill}
            handleLevelChange={handleLevelChange}
          />
        ))}
        <div className="grid grid-cols-5 gap-x-4 mt-6">
          <Select
            className="col-span-2"
            showSearch
            placeholder="Seleccionar habilidad"
            optionFilterProp="children"
            filterOption={(input, option) => {
              if (option) {
                if (
                  typeof input === 'string' &&
                  typeof option.props.children === 'string'
                ) {
                  return option.props.children
                    .toLowerCase()
                    .includes(input.toLowerCase());
                }
              }
              return false; // No aplicar filtro si input u option no son cadenas de texto
            }}
            value={selectedSkill}
            onChange={(value) => setSelectedSkill(value)}
          >
            {skillsLabels.map((skill) => (
              <Select.Option key={skill.value} value={skill.value}>
                {skill.label}
              </Select.Option>
            ))}
          </Select>

          <Select
            className="col-span-2"
            placeholder="Seleccionar nivel"
            optionFilterProp="children"
            value={selectedLevel} // Valor seleccionado para nivel
            onChange={(value) => setSelectedLevel(value)}
          >
            {levelsLabels.map((level) => (
              <Select.Option key={level.value} value={level.label}>
                {level.label}
              </Select.Option>
            ))}
          </Select>
          <button
            type="button"
            className="text-white bg-main_blue_dark px-3 py-1 font-medium rounded-md"
            onClick={handleAddSkill}
            value={selectedLevel} // Valor seleccionado para nivel
          >
            Añadir
          </button>
        </div>
      </div>
    </Drawer>
  );
}
