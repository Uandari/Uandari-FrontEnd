import ShiftTab from './ShiftTab';
import Table from './Table';
import Topbar from './Topbar';

export default function EscalatedIssues() {
  return (
    <div className="flex flex-1 border">
      <div className="grid grid-rows-7 grid-cols-1 bg-white w-[100%]">
        <div className="row-span-1">
          <Topbar />
        </div>
        <div className="row-span-5">
          <ShiftTab shift="Turno A" />
          <Table />
        </div>
      </div>
    </div>
  );
}
