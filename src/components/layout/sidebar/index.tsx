import FiveSIcon from '@icons/5sIcon.svg';
import AbilitiesIcon from '@icons/AbilitiesIcon.svg';
import AssitenceIcon from '@icons/AssitenceIcon.svg';
import ProblemsEvolutionIcon from '@icons/book-reader.svg';
import CellsIcon from '@icons/cell.svg';
import CollaboratorsIcon from '@icons/channel.svg';
import ResultsIcon from '@icons/chart-line.svg';
import RotatingPersonalIcon from '@icons/chat-bubble-user.svg';
import ScaleProblemasIcon from '@icons/clipboard-notes.svg';
import HourPerHourIcon from '@icons/clock-two 1.svg';
import CriticalRouteIcon from '@icons/criticalRouteIcon.svg';
import GoalsIcon from '@icons/crosshair.svg';
import HelpIcon from '@icons/helpIcon.svg';
import ProblemListIcon from '@icons/list-ui-alt 1.svg';
import PointsPlanIcon from '@icons/PointsPlanIcon.svg';
import StandarWorkIcon from '@icons/StandarWorkIcon.svg';
import TeamGoals from '@icons/TeamGoals.svg';
import {
  ASSITENCE,
  COLLABORATORS,
  CRITICAL_PATH,
  DASHBOARD_MAIN,
  ESCALATED_ISSUES,
  GOALS,
  HELP,
  HOURLY_ISSUES,
  ISSUE_TRACKING,
  LIST_OF_ISSUES,
  PAGE_5S,
  POINTS_PLAN,
  PROBLEM_EVOLUTION,
  RESULTS_LOG,
  SKILLS_MATRIX,
  STAFF_ROTATION,
  STANDARD_WORK_SHEET,
  TEAM_GOALS,
} from '@routes/paths';
import UserImg from '@usersIcons/1.png';

import Tab from './tab';

export default function Sidebar() {
  return (
    <aside className="border border-main_color bg-main_color flex flex-col h-screen text-left w-[360px] px-4 py-6 gap-1 bg-primary overflow-y-auto hide-scrollbar">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <img className="w-10 h-10" src={UserImg} alt="user_image" />
          <div>
            <h4 className="text-main_title_color font-medium">
              Usuario Volkswagen
            </h4>
            <p className="text-main_text_color text-xs ">Coordinador</p>
          </div>
        </div>

        <Tab
          icon={GoalsIcon}
          title="Metas"
          path={`${DASHBOARD_MAIN}${GOALS}`}
        />
        <Tab
          icon={CollaboratorsIcon}
          title="Colaboradores"
          path={`${DASHBOARD_MAIN}${COLLABORATORS}`}
        />
        <Tab
          icon={CellsIcon}
          title="Seguimiento de problemas"
          path={`${DASHBOARD_MAIN}${ISSUE_TRACKING}`}
        />
        <Tab
          icon={ResultsIcon}
          title="Registro de resultados"
          path={`${DASHBOARD_MAIN}${RESULTS_LOG}`}
        />

        <h4 className="text-main_gray mt-4 mb-2 text-sm">Nivel 1</h4>

        <Tab
          icon={HourPerHourIcon}
          title="Registro de problemas hora por hora"
          path={`${DASHBOARD_MAIN}${HOURLY_ISSUES}`}
        />

        <Tab
          icon={ProblemListIcon}
          title="Listado de problemas"
          path={`${DASHBOARD_MAIN}${LIST_OF_ISSUES}`}
        />

        <Tab
          icon={ScaleProblemasIcon}
          title="Problemas a escalar"
          path={`${DASHBOARD_MAIN}${ESCALATED_ISSUES}`}
        />

        <Tab
          icon={ProblemsEvolutionIcon}
          title="Evolución de problemas"
          path={`${DASHBOARD_MAIN}${PROBLEM_EVOLUTION}`}
        />
        <Tab
          icon={RotatingPersonalIcon}
          title="Rotación de personal"
          path={`${DASHBOARD_MAIN}${STAFF_ROTATION}`}
        />
        <Tab
          icon={TeamGoals}
          title="Metas de equipo"
          path={`${DASHBOARD_MAIN}${TEAM_GOALS}`}
        />
        <Tab
          icon={AbilitiesIcon}
          title="Matriz de habilidades"
          path={`${DASHBOARD_MAIN}${SKILLS_MATRIX}`}
        />
        <Tab
          icon={AssitenceIcon}
          title="Asistencia por turno"
          path={`${DASHBOARD_MAIN}${ASSITENCE}`}
        />
        <Tab
          icon={CriticalRouteIcon}
          title="Ruta crítica"
          path={`${DASHBOARD_MAIN}${CRITICAL_PATH}`}
        />
        <Tab icon={FiveSIcon} title="5s" path={`${DASHBOARD_MAIN}${PAGE_5S}`} />
        <Tab
          icon={PointsPlanIcon}
          title="Plan de puntos"
          path={`${DASHBOARD_MAIN}${POINTS_PLAN}`}
        />
        <Tab
          icon={StandarWorkIcon}
          title="Hojas de trabajo estándar"
          path={`${DASHBOARD_MAIN}${STANDARD_WORK_SHEET}`}
        />

        <div className="mt-12">
          <Tab
            icon={HelpIcon}
            title="Centro de ayuda"
            path={`${DASHBOARD_MAIN}${HELP}`}
          />
        </div>
      </div>
    </aside>
  );
}
