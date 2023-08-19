import { EscalatedIssuesMock } from '@mocks/EscalatedIssues';

import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';
import { EscalatedIssues } from '@interfaces/EscalatedIssue';

function Board() {
  const mockData = EscalatedIssuesMock;
  return (
    <div className="h-full grid grid-rows-[7]">
      <div className="row-span-1 border-t border-main_color">
        <HeadBoard />
      </div>
      <div className="overflow-y-auto row-span-6 border hide-scrollbar ">
        {mockData.map((escalatedIssue: EscalatedIssues) => (
          <RowBoard
            afecta5s={escalatedIssue.afecta5s}
            desvioEscala={escalatedIssue.desvioEscala}
            estado={escalatedIssue.estado}
            fechaEscalamiento={escalatedIssue.fechaEscalamiento}
            idEscalaProblema={escalatedIssue}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;