import Topbar from '@components/layout/topbar';

import CustomTabs from './modules/Tabs';

export default function Colaborators() {
  return (
    <div className="border border-b grid bg-white w-full h-screen">
      <div className="sticky top-0">
        <Topbar title="Colaboradores" variant="primary" />
        <CustomTabs />
      </div>
    </div>
  );
}
