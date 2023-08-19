import { useEffect, useState } from 'react';

import AnalticsIcon from '@icons/analytics.svg';
import CalendarIcon from '@icons/calender.svg';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Topbar() {
  const [formattedDate, setFormattedDate] = useState<string>('');
  useEffect(() => {
    const currentDate = new Date();
    setFormattedDate(
      format(currentDate, "eeee, d 'de' MMMM 'de' yyyy", { locale: es }),
    );
  }, []);

  return (
    <div className=" w-full h-full pl-8 pt-10 relative">
      <h3 className="text-main_title_color font-semibold text-2xl">
        Problemas a Escalar
      </h3>
      <div className="flex items-center gap-2">
        <img src={CalendarIcon} alt="calender-icon" />
        <p className="text-main_text_color">{formattedDate}</p>
      </div>
      <div className="absolute bottom-8 right-8 flex gap-2 items-center">
        <img src={AnalticsIcon} alt="chart-icon" />
        <p className="text-main_title_color text-sm">
          Desviaciones <span className="text-main_text_color">4</span>
        </p>
      </div>
    </div>
  );
}
