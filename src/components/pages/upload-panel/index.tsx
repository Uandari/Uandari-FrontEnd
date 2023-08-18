import SidebarUpload from '@components/layout/sidebarUpload';
import { Outlet } from 'react-router-dom';

export default function UploadPanel() {
  return (
    <main className="flex flex-col min-w-full min-h-screen h-screen">
      <div className="flex flex-row h-full max-h-full">
        <SidebarUpload />
        <Outlet />
      </div>
    </main>
  );
}
