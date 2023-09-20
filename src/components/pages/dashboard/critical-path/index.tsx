import Topbar from '@components/layout/topbar';

export default function CriticalPath() {
  return (
    <div className="flex flex-1 border">
      <div className="flex flex-1 flex-col bg-white">
        <div className="border-b">
          <Topbar variant="secondary" title="Ruta crítica" />
        </div>
        <div className="flex-1 overflow-y-auto">
        </div>
      </div>
    </div>
  );
}
