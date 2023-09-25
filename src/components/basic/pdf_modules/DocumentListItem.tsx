type DocumentListItemProps = {
  document: {
    pdfUrl: string;
    name: string;
    uploadDate: string;
    namePerson: string;
  };
  handleClick: (document: any) => void;
};

function DocumentListItem({ document, handleClick }: DocumentListItemProps) {
  return (
    <li key={document.pdfUrl}>
      <button
        type="button"
        onClick={() => handleClick(document)}
        className="px-4 py-3 border-b text-left w-full hover:bg-slate-100"
      >
        <p className="font-medium text-lg text-main_title_color">
          {document.name}
        </p>
        <p className="text-main_text_color text-sm">{document.namePerson}</p>
        <p className="text-main_text_color text-sm">{document.uploadDate}</p>
      </button>
    </li>
  );
}

export default DocumentListItem;
