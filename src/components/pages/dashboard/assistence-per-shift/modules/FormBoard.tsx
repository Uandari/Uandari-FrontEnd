import { useEffect, useState } from 'react';

import CalendarIcon from '@icons/calender.svg';
import CategoryIcon from '@icons/categories.svg';
import ClockIcon from '@icons/clockIcon.svg';
import DescriptionIcon from '@icons/description.svg';
import PeopleIcon from '@icons/people.svg';
import ProblemTypeIcon from '@icons/problemType.svg';
import SolutionIcon from '@icons/solution.svg';
import { Button, DatePicker, Form, Radio, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

function FormBoard() {
  const availabilityProblems = [
    {
      value: 'Averías o fallas de equipos',
      label: 'Averías o fallas de equipos',
    },
    {
      value: 'Cambios ajustes Herramientas o modelo (Piezas)',
      label: 'Cambios ajustes Herramientas o modelo (Piezas)',
    },
    {
      value: 'Cambio herramientas de corte (Piezas)',
      label: 'Cambio herramientas de corte (Piezas)',
    },
    {
      value: 'Paros planeados mantenimiento',
      label: 'Paros planeados mantenimiento',
    },
  ];

  const performaceProblems = [
    { value: 'Proveedor', label: 'Proveedor' },
    { value: 'Organización', label: 'Organización' },
    { value: 'Logística', label: 'Logística' },
  ];

  const qualityProblems = [
    {
      value: 'Derecho y retrabajo (Piezas)',
      label: 'Derecho y retrabajo (Piezas)',
    },
  ];

  const peopleMock = [
    {
      value: 'Nombre A',
      label: 'Nombre A',
    },
    {
      value: 'Nombre B',
      label: 'Nombre B',
    },
    {
      value: 'Nombre C',
      label: 'Nombre C',
    },
    {
      value: 'Nombre D',
      label: 'Nombre D',
    },
  ];

  const [formattedDate, setFormattedDate] = useState<string>('');
  const [categoryType, setCategoryType] = useState('DISPONIBILIDAD');
  const [arrayProblems, setArrayProblems] = useState(availabilityProblems);

  const handleProblemTypeChange = (event: any) => {
    setCategoryType(event.target.value);
  };

  useEffect(() => {
    const currentDate = new Date();
    setFormattedDate(
      format(currentDate, "eeee, d 'de' MMMM 'de' yyyy", { locale: es }),
    );
  }, []);

  useEffect(() => {}, []);
  return (
    <div className="w-[365px]">
      <div className="px-5 pt-3">
        <p className="text-main_text_color font-medium">Turno A</p>
        <div className="flex items-center gap-1">
          <img src={CalendarIcon} alt="calendar-icon" />
          <p className="text-main_text_color"> {formattedDate} </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img src={CategoryIcon} alt="icon-category" />
        <Form.Item className="pt-6">
          <Radio.Group
            onChange={handleProblemTypeChange}
            buttonStyle="solid"
            defaultValue={categoryType}
          >
            <Radio.Button value="DISPONIBILIDAD">Disponibilidad</Radio.Button>
            <Radio.Button value="DESEMPENO">Desempeño</Radio.Button>
            <Radio.Button value="CALIDAD">Calidad</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </div>
      <Form.Item>
        <div className="flex items-center gap-2">
          <img src={ProblemTypeIcon} alt="problemType-icon" />
          <Select
            defaultValue={arrayProblems[0].label}
            options={arrayProblems}
          />
        </div>
      </Form.Item>
      <Form.Item>
        <div className="flex items-start gap-2">
          <img src={DescriptionIcon} alt="problemType-icon" />
          <TextArea
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            placeholder="Descripción del problema"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </div>
      </Form.Item>
      <Form.Item>
        <div className="flex items-start gap-2">
          <img src={SolutionIcon} alt="problemType-icon" />
          <TextArea
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            placeholder="Solución del problema"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </div>
      </Form.Item>
      <Form.Item>
        <div className="flex items-start gap-2">
          <img src={ClockIcon} alt="problemType-icon" />
          <DatePicker
            placeholder="Fecha estimada de solución"
            className="w-full"
          />
        </div>
      </Form.Item>
      <Form.Item>
        <div className="flex items-start gap-2">
          <img src={PeopleIcon} alt="problemType-icon" />
          <Select
            mode="multiple"
            allowClear
            placeholder="Selecciona a los responsables"
            options={peopleMock}
          />
        </div>
      </Form.Item>
      <div className="flex justify-end">
        <Form.Item>
          <Button
            className="bg-[#1677ff]"
            htmlType="submit"
            type="primary"
            size="large"
          >
            Guardar
          </Button>
        </Form.Item>
      </div>
    </div>
  );
}

export default FormBoard;
