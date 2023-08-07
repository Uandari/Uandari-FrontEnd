import { useEffect, useState } from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useLocation } from 'react-router-dom';

import Tab, { TabProps } from './tab';

export type DropDownProps = {
  tabs: TabProps[];
  title: string;
  path: string;
  icon: React.ReactNode;
  active?: boolean;
};

export function DropDown({ tabs, active, title, icon, path }: DropDownProps) {
  const location = useLocation();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (active) {
      setIsActive(active);
    }
  }, [active]);

  useEffect(() => {
    if (tabs.some((tab) => location.pathname.includes(tab.path))) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname, tabs]);

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        className={`flex flex-row items-center justify-start font-semibold cursor-pointer rounded-md p-2 gap-2 hover:bg-white hover:text-primary 
        ${isActive ? 'text-secondary bg-white' : 'text-white'}`}
        onClick={() => setIsActive(!isActive)}
      >
        {icon}
        <div className="flex flex-row justify-between w-full">
          <span>{title}</span>
          {isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
      </button>
      {isActive && (
        <div className="flex flex-col gap-1 items-end">
          {tabs.map((tab) => (
            <Tab
              isSubMenu
              key={tab.path}
              icon={tab.icon}
              title={tab.title}
              path={`/${path}${tab.path}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

DropDown.defaultProps = {
  active: false,
};
