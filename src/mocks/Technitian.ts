import { TechnitianFormData } from '@interfaces/Technitian';

export const initialTechnitianInfo = {
  idOperation: '',
  name: '',
  lastNames: '',
  controlNumber: '',
  motor: '',
  line: '',
  shift: '',
  cell: '',
  operation: '',
};

export const TechnitiansListMock: TechnitianFormData[] = [
  {
    name: 'Juan',
    lastNames: 'Pérez López',
    controlNumber: 'AB1234CD',
    motor: 'EA888',
    line: 'Monoblock',
    shift: 'Turno A',
    cell: '3',
    operation: '5',
  },
  {
    name: 'Ana',
    lastNames: 'González Rodríguez',
    controlNumber: 'CD5678AB',
    motor: 'EA211',
    line: 'Cigueñal',
    shift: 'Turno B',
    cell: '7',
    operation: '12',
  },
  {
    name: 'Carlos',
    lastNames: 'Martínez Sánchez',
    controlNumber: 'EF9012GH',
    motor: 'EA888',
    line: 'Monoblock',
    shift: 'Turno C',
    cell: '1',
    operation: '8',
  },
  {
    name: 'Laura',
    lastNames: 'Fernández Pérez',
    controlNumber: 'IJ3456KL',
    motor: 'EA211',
    line: 'Cigueñal',
    shift: 'Turno A',
    cell: '5',
    operation: '15',
  },
  {
    name: 'Miguel',
    lastNames: 'Gómez Rodríguez',
    controlNumber: 'MN7890OP',
    motor: 'EA888',
    line: 'Monoblock',
    shift: 'Turno B',
    cell: '2',
    operation: '10',
  },
  {
    name: 'Isabella',
    lastNames: 'Pérez Martínez',
    controlNumber: 'QR1234ST',
    motor: 'EA211',
    line: 'Cigueñal',
    shift: 'Turno C',
    cell: '8',
    operation: '18',
  },
  {
    name: 'Javier',
    lastNames: 'González López',
    controlNumber: 'UV5678WX',
    motor: 'EA888',
    line: 'Monoblock',
    shift: 'Turno A',
    cell: '4',
    operation: '7',
  },
  {
    name: 'Alejandra',
    lastNames: 'Fernández Sánchez',
    controlNumber: 'YZ9012AB',
    motor: 'EA211',
    line: 'Cigueñal',
    shift: 'Turno B',
    cell: '6',
    operation: '13',
  },
  {
    name: 'Andrés',
    lastNames: 'Gómez Pérez',
    controlNumber: 'CD1234EF',
    motor: 'EA888',
    line: 'Monoblock',
    shift: 'Turno C',
    cell: '9',
    operation: '9',
  },
  {
    name: 'Camila',
    lastNames: 'Martínez Rodríguez',
    controlNumber: 'GH5678IJ',
    motor: 'EA211',
    line: 'Cigueñal',
    shift: 'Turno A',
    cell: '10',
    operation: '20',
  },
];
