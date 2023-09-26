import OptionsIcon from '@assets/icons/bulletsButton.svg';
import { Popover } from 'antd';

export type SkillTabProps = {
  skill: {
    name: string;
    level: string;
  };
  skillIndex: number;
  handleLevelChange: (nuevoNivel: string, skillIndex: number) => void;
  handleDeleteSkill: (skillIndex: number) => void;
};

function SkillTab({
  skill,
  skillIndex,
  handleLevelChange,
  handleDeleteSkill,
}: SkillTabProps) {
  return (
    <div className="border-b py-3 relative">
      <p className="text-main_title_color font-medium">{skill.name}</p>
      <p className="text-main_text_color">{skill.level}</p>
      <Popover
        trigger="click"
        placement="left"
        content={
          <div className="flex flex-col gap-y-2">
            <button
              className="px-3 py-1 hover:bg-slate-100 rounded-md text-left  "
              type="button"
              onClick={() =>
                handleLevelChange('Capacitación y adiestramiento', skillIndex)
              }
            >
              Capacitación y adiestramiento
            </button>
            <button
              className="px-3 py-1 hover:bg-slate-100 rounded-md text-left"
              type="button"
              onClick={() => handleLevelChange('Habilidad', skillIndex)}
            >
              Habilidad
            </button>
            <button
              className="px-3 py-1 hover:bg-slate-100 rounded-md text-left"
              type="button"
              onClick={() => handleLevelChange('Capacitación', skillIndex)}
            >
              Capacitación
            </button>
            <button
              className="px-3 py-1 hover:bg-red-100 rounded-md text-left"
              type="button"
              onClick={() => handleDeleteSkill(skillIndex)}
            >
              Eliminar
            </button>
          </div>
        }
      >
        <button className="absolute top-3 right-2" type="button">
          <img src={OptionsIcon} alt="options-icon" />
        </button>
      </Popover>
    </div>
  );
}

export default SkillTab;
