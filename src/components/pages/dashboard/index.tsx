import Sidebar from '@components/layout/sidebar';
import SidebarTab from '@components/layout/sidebar/sidebarTab';
import SidebarTitle from '@components/layout/sidebar/sidebarTitle';
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
  HOURLY_ISSUES,
  ISSUES_TRACKING,
  ISSUES_LIST,
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
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <main className="flex flex-col min-w-full min-h-full h-full">
      <div className="flex flex-row h-full max-h-full">
        <Sidebar
          userSubtitle="Coordinador"
          userTitle="Ricardo González Flores"
          userImage={UserImg}
        >
          <SidebarTab
            icon={GoalsIcon}
            title="Metas"
            path={`${DASHBOARD_MAIN}${GOALS}`}
          />
          <SidebarTab
            icon={CollaboratorsIcon}
            title="Colaboradores"
            path={`${DASHBOARD_MAIN}${COLLABORATORS}`}
          />
          <SidebarTab
            icon={CellsIcon}
            title="Seguimiento de problemas"
            path={`${DASHBOARD_MAIN}${ISSUES_TRACKING}`}
          />
          <SidebarTab
            icon={ResultsIcon}
            title="Registro de resultados"
            path={`${DASHBOARD_MAIN}${RESULTS_LOG}`}
          />

          <SidebarTitle sidebarTitle="Nivel 1" />

          <SidebarTab
            icon={HourPerHourIcon}
            title="Registro de problemas hora por hora"
            path={`${DASHBOARD_MAIN}${HOURLY_ISSUES}`}
          />

          <SidebarTab
            icon={ProblemListIcon}
            title="Listado de problemas"
            path={`${DASHBOARD_MAIN}${ISSUES_LIST}`}
          />

          <SidebarTab
            icon={ScaleProblemasIcon}
            title="Problemas a escalar"
            path={`${DASHBOARD_MAIN}${ESCALATED_ISSUES}`}
          />

          <SidebarTab
            icon={ProblemsEvolutionIcon}
            title="Evolución de problemas"
            path={`${DASHBOARD_MAIN}${PROBLEM_EVOLUTION}`}
          />
          <SidebarTab
            icon={RotatingPersonalIcon}
            title="Rotación de personal"
            path={`${DASHBOARD_MAIN}${STAFF_ROTATION}`}
          />
          <SidebarTab
            icon={TeamGoals}
            title="Metas de equipo"
            path={`${DASHBOARD_MAIN}${TEAM_GOALS}`}
          />
          <SidebarTab
            icon={AbilitiesIcon}
            title="Matriz de habilidades"
            path={`${DASHBOARD_MAIN}${SKILLS_MATRIX}`}
          />
          <SidebarTab
            icon={AssitenceIcon}
            title="Asistencia por turno"
            path={`${DASHBOARD_MAIN}${ASSITENCE}`}
          />
          <SidebarTab
            icon={CriticalRouteIcon}
            title="Ruta crítica"
            path={`${DASHBOARD_MAIN}${CRITICAL_PATH}`}
          />
          <SidebarTab
            icon={FiveSIcon}
            title="5s"
            path={`${DASHBOARD_MAIN}${PAGE_5S}`}
          />
          <SidebarTab
            icon={PointsPlanIcon}
            title="Plan de puntos"
            path={`${DASHBOARD_MAIN}${POINTS_PLAN}`}
          />
          <SidebarTab
            icon={StandarWorkIcon}
            title="Hojas de trabajo estándar"
            path={`${DASHBOARD_MAIN}${STANDARD_WORK_SHEET}`}
          />
        </Sidebar>
        <Outlet />
      </div>
    </main>
  );
}
