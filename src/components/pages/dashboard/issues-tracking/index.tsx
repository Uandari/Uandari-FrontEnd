import Topbar from '@components/layout/topbar';
import { Tabs, TabsProps } from 'antd';

import GeneralPanel from './modules/Tabs/GeneralPanel';
import IssuesHistory from './modules/Tabs/IssuesHistory';
import PendingProblems from './modules/Tabs/PendingProblems';
import SolvedProblems from './modules/Tabs/SolvedProblems';

function IssuesTracking() {
  const pages: TabsProps['items'] = [
    {
      key: '1',
      label: 'Panel general',
      children: <GeneralPanel />,
    },
    {
      key: '2',
      label: 'Problemas pendientes',
      children: <PendingProblems />,
    },
    {
      key: '3',
      label: 'Problemas resueltos',
      children: <SolvedProblems />,
    },
    {
      key: '4',
      label: 'Histórico de problemas',
      children: <IssuesHistory />,
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Seguimiento de problemas" issues={4} areTabsBelow/>
      <div className="flex flex-1 overflow-y-auto bg-main_white px-4">
        <Tabs className="h-full flex flex-1 " size="large" items={pages} />
      </div>
    </div>
  );
}

export default IssuesTracking;
