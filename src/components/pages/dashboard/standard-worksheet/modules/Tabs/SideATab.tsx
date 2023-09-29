import { operations } from '@mocks/StandardWorksheetA';

import Board from '../../boardSideA';
import RowBoard from '../boardSideA/RowBoard';

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
