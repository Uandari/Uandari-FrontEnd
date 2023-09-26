import { operations } from '@mocks/StandardWorksheetA';

import RowBoard from '../boardSideA/RowBoard';
import Board from '../../boardSideA';

export default function SideATab() {
  return (
    <Board>
      {operations.map((operation) => (
        <RowBoard
          key={operation.operation}
          operation={operation.operation}
          result={operation.result}
        />
      ))}
    </Board>
  );
}


