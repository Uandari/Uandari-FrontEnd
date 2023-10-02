import Topbar from '@components/layout/topbar';
import { Tabs, TabsProps } from 'antd';

import ColaboratorsTab from './modules/Tabs/ColaboratorsTab';
import TechnitiansTab from './modules/Tabs/TechnitiansTab';

const pages: TabsProps['items'] = [
  {
    key: '1',
    label: 'Colaboradores',
    children: <ColaboratorsTab />,
  },
  {
    key: '2',
    label: 'Técnicos',
    children: <TechnitiansTab />,
  },
];

export default function Colaborators() {
  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Colaboradores" areTabsBelow/>
      <div className="flex flex-1 overflow-y-auto bg-main_white">
        <Tabs className="h-full flex flex-1 " size="large" items={pages} />
      </div>
    </div>
  );
}