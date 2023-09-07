import React from 'react';

import ManualDeUsuarioPDF from '@assets/Manual_de_Usuario_SFM_Software.pdf'; // Importa el PDF
import Topbar from '@components/layout/topbar';
import PDFViewer from 'pdf-viewer-reactjs';

export default function CriticalPath() {
  return (
    <div className="flex flex-1 border">
      <div className="flex flex-1 flex-col bg-white">
        <div className="border-b">
          <Topbar variant="secondary" title="Metas de equipo" />
        </div>
        <div className="flex-1 overflow-y-auto">
          <PDFViewer
            document={{
              file: ManualDeUsuarioPDF, // Pasa el PDF importado como archivo
            }}
          />
        </div>
      </div>
    </div>
  );
}
