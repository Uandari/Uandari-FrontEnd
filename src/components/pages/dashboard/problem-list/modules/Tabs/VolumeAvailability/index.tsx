import { problemListCards } from '@mocks/ProblemListCards';

import Board from '../../../Board';
import CardStatistics from '../../CardStatistics';

function VolumeAvailability() {
  return (
    <div className="flex flex-col h-full flex-1">
      <div
        className="h-36 w-full grid grid-cols-5 gap-x-6 px-5"
        style={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr)) minmax(0, 2fr)',
        }}
      >
        {problemListCards.map((card) => (
          <CardStatistics
            title={card.title}
            percentage={card.percentage}
            description={card.description}
          />
        ))}
      </div>
      <Board />
    </div>
  );
}

export default VolumeAvailability;
