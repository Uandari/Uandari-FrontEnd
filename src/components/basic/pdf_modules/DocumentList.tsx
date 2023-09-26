import { useEffect, useState } from 'react';

import DocumentListItem from '@components/basic/pdf_modules/DocumentListItem';
import { Document } from '@interfaces/Document';
import { Select, DatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs';

interface DocumentListProps {
  documents: Document[];
  handleClick: (document: Document) => void;
}

export default function DocumentList({
  documents,
  handleClick,
}: DocumentListProps) {
  const [year, setYear] = useState<string>('');
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setYear(dateString);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    setYear(String(currentYear));
  }, [setYear]);

  return (
    <div className="border-l overflow-y-scroll hide-scrollbar w-1/3">
      <h2 className="font-medium text-xl p-4">Lista de Documentos</h2>
      <div className="flex gap-x-3 pl-4 mb-3">
        <Select
          showSearch
          placeholder="Seleccionar documento"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toString().includes(input.toString())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toString()
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toString().toLowerCase())
          }
          options={documents.map((document) => ({
            label: document.name,
            value: document.name,
          }))}
        />
        <DatePicker
          onChange={onChange}
          picker="date"
          defaultValue={dayjs()}
          format="YYYY-MM-DD"
        />
      </div>
      <div className="flex gap-x-3 pl-4 mb-3">
        <Select
          showSearch
          placeholder="Seleccionar documento por nombre de persona"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toString().includes(input.toString())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toString()
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toString().toLowerCase())
          }
          options={documents.map((document) => ({
            label: document.namePerson,
            value: document.namePerson,
          }))}
        />
      </div>
      <ul>
        {documents.map((document) => (
          <DocumentListItem
            key={document.pdfUrl}
            document={document}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}
