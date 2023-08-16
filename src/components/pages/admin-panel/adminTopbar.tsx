import { useEffect, useState } from 'react';

import AnalticsIcon from '@assets/analytics.svg';
import CalendarIcon from '@assets/calender.svg';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function AdminTopbar() {
  const [formattedDate, setFormattedDate] = useState<string>('');
  useEffect(() => {
    const currentDate = new Date();
    setFormattedDate(
      format(currentDate, "eeee, d 'de' MMMM 'de' yyyy", { locale: es }),
    );
  }, []);

  return (
    <div className="border border-b-main_color w-full h-full pl-8 pt-10 relative">
      <h3 className="text-main_title_color font-semibold text-xl">
        Gestión de roles
      </h3>
    </div>
  );
}

export default AdminTopbar;
