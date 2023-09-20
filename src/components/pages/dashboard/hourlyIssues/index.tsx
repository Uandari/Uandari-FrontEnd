import { useState } from 'react';

import Board from './Board';
import DetailBar from './DetailBar';
import Topbar from '../../../layout/topbar';

function HourlyIssues() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-1 border">
      {/* Justo aquí se cambia el ancho */}
      <div
        className={`transition-all duration-300 ${
          collapsed ? 'w-[3%]' : 'w-[20%]'
        }`}
      >
        <DetailBar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>
      <div className="flex flex-1 flex-col bg-white">
        <div>
          <Topbar
            variant="primary"
            title="Registro de problemas hora por hora" underline
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
