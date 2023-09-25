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
    <div className="border border-b grid bg-white flex-1 h-screen">
      <div className="sticky top-0">
        <Topbar title="Colaboradores" variant="secondary" />
        <div className="w-full">

          <Tabs className="h-full flex flex-1 " size="large" items={pages} />
        </div>
      </div>
    </div>
  );
}
