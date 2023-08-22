export type LabelTabProps = {
  icon: string;
  title: string;
  quantity: string;
};

function LabelTab({ title, icon, quantity }: LabelTabProps) {
  return (
    <div className="pb-2 border-b border-main_color">
      <div className="flex w-full items-center justify-between px-3">
        <div className="flex gap-2 items-center">
          <img className="w-5" src={icon} alt="" />
          <p className="text-main_text_color"> {title} </p>
        </div>
        <p className="font-medium text-main_text_color text-lg"> {quantity} </p>
      </div>
    </div>
  );
}

export default LabelTab;
