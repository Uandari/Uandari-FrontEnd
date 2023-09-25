import { Document } from '@interfaces/Document';

interface PDFViewerProps {
  document: Document;
}

export default function PDFViewer({ document }: PDFViewerProps) {
  return (
    <div className=" flex flex-col w-2/3">
      <iframe
        title={`PDF Viewer - ${document.pdfUrl}`}
        src={document.pdfUrl}
        width="100%"
        height="100%"
      />
    </div>
  );
}
