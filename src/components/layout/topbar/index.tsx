import { useEffect, useState } from 'react';

import CalendarIcon from '@icons/calender.svg';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import AnalticsIcon from '@icons/analytics.svg';

type TopBarProps = {
  title: string;
  issues?: number;
  underline?: boolean;
  date?: boolean;
  areTabsBelow?: boolean;
};

export default function Topbar({ title, issues, underline, date, areTabsBelow }: TopBarProps) {
  const [formattedDate, setFormattedDate] = useState<string>('');
  useEffect(() => {
    const currentDate = new Date();
    setFormattedDate(
      format(currentDate, "eeee, d 'de' MMMM 'de' yyyy", { locale: es }),
    );
  }, []);

    return (
      <div className={`w-full px-8 pt-8 ${areTabsBelow ? 'pb-3' : 'pb-8' }  relative ${underline ? 'border-b' : '' } bg-main_white`}>
        <h3 className="text-main_title_color font-semibold text-xl">{title}</h3>
        {date ? <div className="flex items-center gap-2">
          <img src={CalendarIcon} alt="calendar-icon" />
          <p className="text-main_text_color text-sm p">{formattedDate}</p>
        </div> : null}

        {issues ?  <div className={`absolute ${date ? 'bottom-11' : 'bottom-8' } right-8 flex gap-2 items-center`}>
          <img src={AnalticsIcon} alt="chart-icon" />
          <p className="text-main_title_color text-sm">
            Problemas <span className="text-main_text_color">{issues}</span>
          </p>
        </div> : null}
      </div>
    );
  }

Topbar.defaultProps = {
  issues: null,
  underline: false,
  date: false,
  areTabsBelow: false
};