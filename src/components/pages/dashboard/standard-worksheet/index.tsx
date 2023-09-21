import Topbar from '@components/layout/topbar';

import CustomTabs from './modules/Tabs';

export default function StandardWorksheet() {
  return (
    <div className="border border-b grid bg-white flex-1 h-screen">
      <div className="sticky top-0">
        <Topbar title="Hoja de Trabajo Estándar" variant="secondary" />
        <CustomTabs />
      </div>
    </div>
  );
}
