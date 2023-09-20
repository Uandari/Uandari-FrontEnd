import Topbar from '@components/layout/topbar';
import { Collapse, DatePicker, DatePickerProps } from 'antd';

function Goals() {
  const items = [
    {
      key: '1',
      label: 'Enero',
      children: <p>jeje</p>,
    },
    {
      key: '2',
      label: 'Febrero',
      children: <p>jeje</p>,
    },
    {
      key: '3',
      label: 'Marzo',
      children: <p>Jeje</p>,
    },
  ];

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="Metas" variant="secondary" />
      <div className="flex flex-1 overflow-y-auto bg-main_white border-t border-main_color">
        <div className="w-3/5">
          <Collapse ghost items={items} />
        </div>
        <div className="w-2/5 border-l border-main_color pt-6 px-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-medium pb-3">Reporte de metas</h3>
            <DatePicker onChange={onChange} picker="year" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
