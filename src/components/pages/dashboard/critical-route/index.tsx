import { useState } from 'react';

import PDFViewer from '@components/basic/pdf_modules/PDFViewer';
import DocumentList from '@components/basic/pdf_modules/DocumentList';

import Topbar from '@components/layout/topbar';
import { Document } from '@interfaces/Document';

export default function CriticalRoute() {
  const documents: Document[] = [
    {
      name: 'Documento 1',
      uploadDate: '2023-09-25',
      pdfUrl: '../../../../../src/assets/CriticalRoute/RT1.pdf',
      namePerson: 'Joseph Efrain Camargo',
    },
    {
      name: 'Documento 2',
      uploadDate: '2023-09-24',
      pdfUrl: '../../../../../src/assets/CriticalRoute/RT2.pdf',
      namePerson: 'Ricardo Gonzalez Flores',
    },
  ];

  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    documents[0], // Para que siempre empiece con el primer documento
  );

  // Manejar la selección de un documento
  const handleClick = (document: Document) => {
    setSelectedDocument(document);
  };

  return (
    <div className="flex flex-1 flex-col">
      <Topbar variant="primary" title="Ruta Crítica" issues={4} />
      <div className="flex flex-1 overflow-y-auto bg-white border-t">
        {selectedDocument && <PDFViewer document={selectedDocument} />}
        <DocumentList documents={documents} handleClick={handleClick} />
      </div>
    </div>
  );
}
