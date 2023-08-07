import { ReactNode, useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

export type TabProps = {
  icon: ReactNode;
  title: string;
  path: string;
  isSubMenu?: boolean;
  active?: boolean;
};

export default function Tab({
  icon,
  title,
  path,
  active,
  isSubMenu,
}: TabProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (active) {
      setIsActive(active);
    }
  }, [active]);

  useEffect(() => {
    if (location.pathname === path) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname, path]);

  return (
    <button
      type="button"
      className={`flex flex-row items-center justify-start font-semibold cursor-pointer rounded-md p-2 gap-2 hover:bg-white hover:text-primary 
        ${isActive ? 'text-secondary bg-white' : 'text-white'}
        ${isSubMenu ? 'w-10/12' : 'w-full'}`}
      onClick={() => navigate(path)}
    >
      {icon} <span>{title}</span>
    </button>
  );
}

Tab.defaultProps = {
  active: false,
  isSubMenu: false,
};
