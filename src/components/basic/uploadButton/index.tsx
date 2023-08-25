import InboxIcon from '@icons/inboxIcon.svg';
import { Upload } from 'antd';

const { Dragger } = Upload;

export default function UploadButton() {
  return (
    <div className="flex items-center justify-center mt-32">
      <div className="upload-box w-outlet h-64">
        <Dragger>
          <div className="flex justify-center">
            <img src={InboxIcon} alt="Inbox icon" className="mb-4" />
          </div>
          <p className="text-main_text_color">
            Click o suelta los archivos en esta área para subir
          </p>
          <p className="text-main_gray">
            Solo se aceptan archivos en formato PDF
          </p>
        </Dragger>
      </div>
    </div>
  );
}
