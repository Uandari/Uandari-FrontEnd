import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

export type TabProps = {
  icon: string;
  title: string;
  path: string;
  active?: boolean;
};

export default function Tab({ icon, title, path, active }: TabProps) {
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
      onClick={() => navigate(path)}
      className={`flex gap-2 w-full pl-3 py-[6px] rounded-md hover:bg-slate-200
        ${isActive && 'bg-white border  border-main_color '}`}
    >
      <img src={icon} alt="icon" className="w-5" />
      <p className="text-main_text_color"> {title} </p>
    </button>
  );
}

Tab.defaultProps = {
  active: false,
};
