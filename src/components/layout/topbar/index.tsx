import { useEffect, useState } from 'react';

import AnalticsIcon from '@icons/analytics.svg';
import CalendarIcon from '@icons/calender.svg';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

type TopBarProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  underline: boolean;
};

export default function Topbar({ title, variant, underline }: TopBarProps) {
  const [formattedDate, setFormattedDate] = useState<string>('');
  useEffect(() => {
    const currentDate = new Date();
    setFormattedDate(
      format(currentDate, "eeee, d 'de' MMMM 'de' yyyy", { locale: es }),
    );
  }, []);

  if (variant === 'primary') {
    return (
      <div className={`w-full h-28 pl-8 pt-10 relative bg-main_white ${underline ? 'border-b' : ''}`}>
        <h3 className="text-main_title_color font-semibold text-xl">{title}</h3>
        <div className="flex items-center gap-2">
          <img src={CalendarIcon} alt="calendar-icon" />
          <p className="text-main_text_color text-sm">{formattedDate}</p>
        </div>

        <div className="absolute bottom-8 right-8 flex gap-2 items-center">
          <img src={AnalticsIcon} alt="chart-icon" />
          <p className="text-main_title_color text-sm">
            Problemas <span className="text-main_text_color">4</span>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={`w-full h-28 pl-8 pt-10 relative bg-main_white ${underline ? 'border-b' : ''}`}>
      <h3 className="text-main_title_color font-semibold text-xl">{title}</h3>
    </div>
  );
}

Topbar.defaultProps = {
  variant: 'primary',
  underline: false,
};
