import UploadButton from '@components/basic/uploadButton';
import Topbar from '@components/layout/topbar';

function CriticalPathUpload() {
  return (
    <div className="flex flex-1 border">
      <div className="grid grid-rows-6 grid-cols-1 bg-white w-[100%] ">
        <div className="row-span-1">
          <Topbar title="Subir archivo de ruta crítica" variant="secondary" />
        </div>
        <div className="row-span-5 wy">
          <UploadButton />
        </div>
      </div>
    </div>
  );
}

export default CriticalPathUpload;
