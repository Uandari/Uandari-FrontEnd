import Topbar from '@components/layout/topbar';

import CustomTabs from './modules/Tabs';

export default function Colaborators() {
  return (
    <div className="border border-b grid bg-white flex-1 h-screen">
      <div className="sticky top-0">
        <Topbar title="Colaboradores" variant="secondary" />
        <CustomTabs />
      </div>
    </div>
  );
}
