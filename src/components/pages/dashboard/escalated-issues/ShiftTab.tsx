import clockIcon from '@assets/clock-two 1.svg';

export type ShiftTabProps = {
  shift: string;
};

export default function ShiftTab({ shift }: ShiftTabProps) {
  return (
    <div className="flex items-center gap-2 px-3">
      <img src={clockIcon} alt="clock-icon" />
      <p className="text-main_text_color text_sm">{shift}</p>
    </div>
  );
}
