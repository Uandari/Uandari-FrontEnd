type ReportCardProps = {
  id: number;
  date: string;
  shift: string;
  name: string;
};

function ReportCard({ id, date, shift, name }: ReportCardProps) {
  return (
    <button
      type="button"
      className="px-4 py-3 border-b text-left w-full hover:bg-slate-100"
    >
      <h4 className="font-medium text-lg text-main_title_color">
        Checklist #{id}
      </h4>
      <div className="flex gap-x-2">
        <p className="text-main_text_color text-sm">{date}</p>
        <p className="text-main_text_color text-sm">{shift}</p>
        <p className="text-main_text_color text-sm">{name}</p>
      </div>
    </button>
  );
}

export default ReportCard;
