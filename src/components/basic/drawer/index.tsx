import { useEffect, useState } from 'react';

import CalendarIcon from '@assets/icons/calender.svg';
import CategoryIcon from '@assets/icons/categoryIcon.svg';
import ClockIcon from '@assets/icons/clockIcon.svg';
import DescriptionIcon from '@assets/icons/description.svg';
import QuantityIcon from '@assets/icons/quantity.svg';
import SolutionIcon from '@assets/icons/solution.svg';
import PeopleIcon from '@icons/people.svg';
import { IssueInterface } from '@interfaces/Issue';
import { Drawer, Space, Button, Select } from 'antd';

export type DrawerComponentProps = {
  onClose: () => void;
  open: boolean;
  issue: IssueInterface;
};

function DrawerComponent({ open, onClose, issue }: DrawerComponentProps) {
  const {
    id,
    type,
    category,
    area,
    createdDate,
    description,
    done,
    participant,
    solution,
    solutionDate,
    states,
    total,
  } = issue;
  const [selectedState, setSelectedState] = useState<number>(states[0]?.value);

  const handleStateChange = (value: number) => {
    setSelectedState(value);
  };

  return (
    <div>
      <Drawer
        title="Detalle problema"
        width={620}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button
              onClick={onClose}
              type="primary"
              className="bg-main_blue_dark"
            >
              Guardar
            </Button>
          </Space>
        }
      >
        <div>
          <div className="flex items-start gap-9 justify-between">
            <div>
              <div className="flex items-center gap-x-2">
                <img src={CalendarIcon} alt="calendar-icon" />
                <p className="text-main_text_color"> {createdDate} </p>
              </div>
              <h2 className="text-main_title_color font-medium text-2xl">
                {type}
              </h2>
              <p className="text-sm text-main_text_color">{category}</p>
              <div className="flex gap-x-2 items-center mt-2">
                <img src={CategoryIcon} alt="category-icon" />
                <p className="text-main_text_color text-xs">{area}</p>
              </div>
            </div>
            <div>
              <p className="text-main_text_color">Fecha estimada de solución</p>
              <div className="flex items-center justify-end gap-2">
                <img src={ClockIcon} alt="clock-icon" />
                <p className="font-medium text-main_text_color">
                  {solutionDate}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 mt-10">
            <div className="flex gap-x-2">
              <img src={PeopleIcon} alt="participant" />
              <p className="text-main_text_color">{participant}</p>
            </div>

            <div className="flex gap-x-5 items-start">
              <img
                className="w-5"
                src={DescriptionIcon}
                alt="description-icon"
              />
              <p className="text-main_text_color">{description}</p>
            </div>

            <div className="flex gap-x-5 items-start">
              <img className="w-5" src={SolutionIcon} alt="description-icon" />
              <p className="text-main_text_color">{solution}</p>
            </div>
            <div className="flex gap-x-5 items-start">
              <img className="w-5" src={QuantityIcon} alt="description-icon" />
              <p className="text-main_text_color font-medium">
                {done} motores producidos de {total}
              </p>
            </div>
          </div>
          <p className="text-main_text_color mt-8">Estado del problema</p>
          <Select
            placeholder="Selecciona el estado del problema"
            className="w-full"
            showSearch
            optionFilterProp="children"
            options={states.map((state) => ({
              value: state.value,
              label: state.label,
            }))}
            value={selectedState}
            onChange={handleStateChange}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
