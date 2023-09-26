import { useState } from 'react';

import DownIcon from '@assets/icons/downIcon.svg';
import UserImage from '@assets/usersIcons/11.png';
import { userSkills } from '@mocks/UserSkills';

import DrawerComponent from './Drawer';

type UserRowProps = {
  id: number;
  image?: string;
  fullname: string;
  controlNumber: number;
  skills: {
    name: string;
    level: string;
  }[];
};

export default function UserRow({
  id,
  image,
  fullname,
  controlNumber,
  skills,
}: UserRowProps) {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenCollapse = () => {
    setOpen(!open);
  };
  return (
    <div className="border-b px-6 py-4">
      <button
        type="button"
        onClick={handleOpenCollapse}
        className="flex justify-between items-center w-full"
      >
        <div className="flex gap-x-3 items-center">
          <img className="w-12" src={UserImage} alt="user-img" />
          <div>
            <h4 className=" text-main_title_color">{fullname}</h4>
            <p className="text-main_gray text-left">{controlNumber}</p>
          </div>
        </div>
        <img
          className={`transition-all duration-300 ${open ? 'rotate-180' : ''}`}
          src={DownIcon}
          alt="open-icon"
        />
      </button>
      <div className={`flex flex-col gap-y-3 mt-7 ${open ? '' : 'hidden'}`}>
        <div className="w-full flex justify-between items-center">
          <p className="font-medium">Habilidades</p>
          <button
            onClick={() => setOpenDrawer(true)}
            type="button"
            className="bg-main_blue_dark px-6 py-1 text-main_white w-[200px] rounded-lg"
          >
            Editar habiliades
          </button>
        </div>
        <div>
          {skills.map((skill) => (
            <div className="pb-2" key={skill.name}>
              <p className="text-main_text_color">{skill.name}</p>
              <p className="text-sm text-main_gray">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
      <DrawerComponent
        user={userSkills}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </div>
  );
}

UserRow.defaultProps = {
  image: null,
};
