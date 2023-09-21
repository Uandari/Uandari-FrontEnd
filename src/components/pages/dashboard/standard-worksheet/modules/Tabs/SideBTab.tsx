import { standardWorkSheetBListMock } from '@mocks/StandardWorksheetB';

import Board from '../../boardSideB';
import RowBoard from '../boardSideB/RowBoard';

export default function SideBTab() {
  const mockData = standardWorkSheetBListMock;
  return (
    <Board>
      {mockData.map((standardWorksheetB) => (
        <RowBoard
          key={standardWorksheetB.idDeviation}
          celule={standardWorksheetB.celule}
          operation={standardWorksheetB.operation}
          description={standardWorksheetB.description}
          responsible={standardWorksheetB.responsible}
          action={standardWorksheetB.action}
          term={standardWorksheetB.term}
          status={standardWorksheetB.status}
          idDeviation={standardWorksheetB.idDeviation}
        />
      ))}
    </Board>
  );
}
