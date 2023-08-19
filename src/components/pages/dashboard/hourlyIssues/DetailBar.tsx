import GoalsIcon from '@icons/crosshair.svg';
import SettingsIcon from '@icons/SettingIcon.svg';
import { Tabs, TabsProps } from 'antd';

import AvailabilityTab from './modules/Tabs/AvailabilityTab';
import PerformanceTab from './modules/Tabs/PerformanceTab';
import QualityTab from './modules/Tabs/QualityTab';

function DetailBar() {
  const itemsTabs: TabsProps['items'] = [
    {
      key: '1',
      label: 'Disponibilidad',
      children: <AvailabilityTab />,
    },
    {
      key: '2',
      label: 'Desempeño',
      children: <PerformanceTab />,
    },
    {
      key: '3',
      label: 'Calidad',
      children: <QualityTab />,
    },
  ];

  return (
    <div className="w-full h-screen pt-6 border border-l-main_color overflow-y-auto bg-white hide-scrollbar">
      <div className="flex justify-between items-center w-full px-3 ">
        <div>
          <h4 className="text-main_title_color font-medium text-2xl">Hoy</h4>
          <div className="flex items-center gap-1">
            <img src={GoalsIcon} alt="goal-icon" />
            <p className="text-main_text_color">800 motores</p>
          </div>
        </div>
        <button type="button">
          <img src={SettingsIcon} alt="settings-icon" />
        </button>
      </div>
      <div className="px-2">
        <Tabs color="#A10909" defaultActiveKey="1" items={itemsTabs} />
      </div>
    </div>
  );
}

export default DetailBar;
