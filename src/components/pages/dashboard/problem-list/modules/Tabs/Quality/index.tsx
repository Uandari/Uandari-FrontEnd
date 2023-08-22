import Board from '../../../Board';
import CardStatistics from '../../CardStatistics';

function Quality() {
  return (
    <div className="flex flex-col h-full flex-1">
      <div className="h-36 w-full grid grid-cols-5 gap-x-6 px-5">
        <CardStatistics type="Pendientes" percentage="-2.5" quantity="25" />
        <CardStatistics type="Resueltos" percentage="2.5" quantity="25" />
        <CardStatistics type="Escalados" percentage="-2.5" quantity="25" />
        <div className="col-span-2">
          <CardStatistics
            type="Problema principal"
            percentage="-2.5"
            problem="Cambios / Ajustes Herramientas o modelo (Piezas)"
          />
        </div>
      </div>
      <Board />
    </div>
  );
}

export default Quality;
