import AvailabilityTab from '@components/layout/tabs/AvailabilityTab';
import PerformanceTab from '@components/layout/tabs/PerformanceTab';
import QualityTab from '@components/layout/tabs/QualityTab';
import GoalsIcon from '@icons/crosshair.svg';
import SettingsIcon from '@icons/SettingIcon.svg';
import { Tabs, TabsProps } from 'antd';

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
    <div className="w-full h-screen pt-6 border-r border-main_color overflow-y-auto bg-white hide-scrollbar">
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
      <Tabs color="#A10909" defaultActiveKey="1" items={itemsTabs} />
    </div>
  );
}

export default DetailBar;
