export type LabelTabProps = {
  icon: string;
  title: string;
  quantity: string;
};

function LabelTab({ title, icon, quantity }: LabelTabProps) {
  return (
    <div className="flex w-full items-center justify-between pb-2 border-b border-main_color">
      <div className="flex gap-2 items-center px-2">
        <img className="w-5" src={icon} alt="" />
        <p className="text-main_text_color"> {title} </p>
      </div>
      <p className="font-medium text-main_text_color text-lg px-2">
        {' '}
        {quantity}{' '}
      </p>
    </div>
  );
}

export default LabelTab;
