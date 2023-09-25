import Topbar from '@components/layout/topbar';
import SideATab from './modules/Tabs/SideATab';
import SideBTab from './modules/Tabs/SideBTab';
import { Tabs, TabsProps } from 'antd';

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
    <div className="flex flex-1 flex-col">
      <Topbar title="Colaboradores" variant="secondary" />
      <div className="flex flex-1 overflow-y-auto bg-main_white">
        <Tabs className="h-full flex flex-1 " size="large" items={itemsTabs} />
      </div>
    </div>
  );
}
