import ClockIcon from '@assets/clock-two 1.svg';

export type ShiftTabProps = {
  shift: string;
};

function ShiftTab({ shift }: ShiftTabProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b border-main_color">
      <img src={ClockIcon} alt="clock-icon" />
      <p className="text-main_text_color text-sm"> {shift} </p>
    </div>
  );
}

export default ShiftTab;
