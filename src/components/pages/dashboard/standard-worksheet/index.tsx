import Topbar from '@components/layout/topbar';
import { Tabs, TabsProps } from 'antd';

import SideATab from './modules/Tabs/SideATab';
import SideBTab from './modules/Tabs/SideBTab';

const itemsTabs: TabsProps['items'] = [
  {
    key: '1',
    label: 'Lado A',
    children: <SideATab />,
  },
  {
    key: '2',
    label: 'Lado B',
    children: <SideBTab />,
  },
];

export default function StandardWorksheet() {
  return (
    <div className="border border-b grid bg-white flex-1 h-screen">
      <div className="sticky top-0">
        <Topbar title="Hoja de Trabajo Estándar" />
        <Tabs defaultActiveKey="1" items={itemsTabs} />
      </div>
    </div>
  );
}
