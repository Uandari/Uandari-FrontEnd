import { IssueCardMock } from '@mocks/IssuesCard';
import { DatePicker, Select } from 'antd';

import IssueCard from '../../IssueCard';

function IssuesHistory() {
  const { RangePicker } = DatePicker;

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <div className="flex w-full flex-grow flex-1">
      <div className="grid grid-rows-1 grid-cols-3 w-full">
        <div className="col-span-2">
          <p className="px-4 py-3 font-medium text-main_text_color text-right">
            {IssueCardMock.length} registros encontrados
          </p>
          <div className="flex flex-col gap-y-3 px-3">
            {IssueCardMock.map((issue) => (
              <IssueCard
                id={issue.id}
                category={issue.category}
                dateCreated={issue.dateCreated}
                dateToSolveProblem={issue.dateToSolveProblem}
                participants={issue.participants}
                quantity={issue.quantity}
                status={issue.status}
                typeProblem={issue.typeProblem}
                key={issue.id}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col px-3 py-3 border-l border-main_color">
          <div className="flex flex-col gap-y-3">
            <h4 className="text-lg font-medium"> Filtros </h4>
            <div>
              <p className="text-main_text_color">Fecha</p>
              <RangePicker className="w-full" />
            </div>
            <div>
              <p className="text-main_text_color">Categoría</p>
              <Select
                className="w-full"
                showSearch
                placeholder="Selecciona una categoría"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'Categoría 1',
                    label: 'Categoría 1',
                  },
                  {
                    value: 'Categoría 2',
                    label: 'Categoría 2',
                  },
                  {
                    value: 'Categoría 3',
                    label: 'Categoría 3',
                  },
                ]}
              />
            </div>
            <div>
              <p className="text-main_text_color">Tipo de problema</p>
              <Select
                className="w-full"
                showSearch
                placeholder="Selecciona el tipo de problema"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'Tipo de problema 1',
                    label: 'Tipo de problema 1',
                  },
                  {
                    value: 'Tipo de problema 2',
                    label: 'Tipo de problema 2',
                  },
                  {
                    value: 'Tipo de problema 3',
                    label: 'Tipo de problema 3',
                  },
                ]}
              />
            </div>
            <div>
              <p className="text-main_text_color">Célula</p>
              <Select
                className="w-full"
                showSearch
                mode="multiple"
                placeholder="Selecciona una célula"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'Celula 1',
                    label: 'Celula 1',
                  },
                  {
                    value: 'Celula 2',
                    label: 'Celula 2',
                  },
                  {
                    value: 'Celula 3',
                    label: 'Celula 3',
                  },
                ]}
              />
            </div>
            <div>
              <p className="text-main_text_color">Estatus de problema</p>
              <Select
                className="w-full"
                showSearch
                mode="multiple"
                placeholder="Selecciona una estatus"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'Resuelto',
                    label: 'Resuelto',
                  },
                  {
                    value: 'Pendiente',
                    label: 'Pendiente',
                  },
                  {
                    value: 'Escalado',
                    label: 'Escalado',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssuesHistory;
