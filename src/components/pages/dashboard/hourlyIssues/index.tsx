import Board from './Board';
import DetailBar from './DetailBar';
import Topbar from '../../../layout/topbar';

function HourlyIssues() {
  return (
    <div className="flex flex-1 border">
      <div className="w-[20%]">
        <DetailBar />
      </div>
      <div className="flex flex-1 flex-col bg-white">
        <div>
          <Topbar
            variant="primary"
            title="Registro de problemas hora por hora"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default HourlyIssues;
