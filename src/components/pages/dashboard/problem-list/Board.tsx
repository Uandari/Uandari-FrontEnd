import { problemList } from '@mocks/ProblemList';

import HeadBoard from './modules/HeadBoard';
import RowBoard from './modules/RowBoard';

function Board() {
  return (
    <div className="w-full">
      <HeadBoard />
      {problemList.map((problem) => (
        <RowBoard
          typeCategory={problem.typeCategory}
          description={problem.description}
          carType={problem.carType}
          days={problem.days}
        />
      ))}
    </div>
  );
}

export default Board;
