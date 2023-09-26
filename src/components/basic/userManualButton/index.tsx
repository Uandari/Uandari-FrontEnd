import UserManualFile from '@assets/Manual_de_Usuario_SFM_Software.pdf';
import HelpIcon from '@icons/helpIcon.svg';

export default function OpenUserManual() {
  const pdfUrl = UserManualFile;

  return (
    <div>
      <a href={pdfUrl} target="_blank" rel="noreferrer">
        {' '}
        <button
          type="button"
          className="flex gap-2 w-full pl-3 py-[6px] rounded-md hover:bg-slate-200"
        >
          <img
            src={HelpIcon}
            alt="Icono de manual de usuario"
            className="w-5"
          />
          <p className="text-main_text_color"> Manual de Usuario </p>
        </button>
      </a>
    </div>
  );
}
