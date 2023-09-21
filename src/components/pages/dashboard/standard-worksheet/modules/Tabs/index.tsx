import { Tabs, TabsProps } from 'antd';

import SideATab from './SideATab';
import SideBTab from './SideBTab';

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

export default function CustomTabs() {
  return (
    <div className="w-full">
      <Tabs defaultActiveKey="1" items={itemsTabs} />
    </div>
  );
}
