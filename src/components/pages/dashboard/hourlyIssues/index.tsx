import Board from './Board';
import DetailBar from './DetailBar';
import Topbar from './Topbar';

function HourlyIssues() {
  return (
    <div className="flex flex-1 border">
      <div className="w-[20%]">
        <DetailBar />
      </div>
      <div className="grid grid-rows-6 grid-cols-1 bg-white w-[80%] ">
        <div className="row-span-1">
          <Topbar />
        </div>
        <div className="row-span-5">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default HourlyIssues;
