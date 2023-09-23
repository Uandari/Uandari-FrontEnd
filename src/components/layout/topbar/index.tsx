import { useEffect, useState } from 'react';

import CalendarIcon from '@icons/calender.svg';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

type TopBarProps = {
  title: string;
  variant?: 'primary' | 'secondary';
};

export default function Topbar({ title, variant }: TopBarProps) {
  const [formattedDate, setFormattedDate] = useState<string>('');
  useEffect(() => {
    const currentDate = new Date();
    setFormattedDate(
      format(currentDate, "eeee, d 'de' MMMM 'de' yyyy", { locale: es }),
    );
  }, []);

  if (variant === 'primary') {
    return (
      <div className=" w-full h-28 pl-8 pt-10 relative bg-main_white">
        <h3 className="text-main_title_color font-semibold text-xl">{title}</h3>
        <div className="flex items-center gap-2">
          <img src={CalendarIcon} alt="calendar-icon" />
          <p className="text-main_text_color text-sm">{formattedDate}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-28 pl-8 pt-10 relative bg-main_white">
      <h3 className="text-main_title_color font-semibold text-xl">{title}</h3>
    </div>
  );
}

Topbar.defaultProps = {
  variant: 'primary',
};
