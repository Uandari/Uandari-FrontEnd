
import GoalsIcon from '../assets/icons/crosshair.svg';
import PointsPlanIcon from '../assets/icons/PointsPlanIcon.svg';
import { POINTS_PLAN } from '@routes/paths';

// Hours Array for Hour per Hour Page
export const hoursToRender = [
  { shortHour: '06:00', completeHour: '6:00 - 7:00' },
  { shortHour: '07:00', completeHour: '7:00 - 8:00' },
  { shortHour: '08:00', completeHour: '8:00 - 9:00' },
  { shortHour: '09:00', completeHour: '9:00 - 10:00' },
  { shortHour: '10:00', completeHour: '10:00 - 11:00' },
  { shortHour: '11:00', completeHour: '11:00 - 12:00' },
  { shortHour: '12:00', completeHour: '12:00 - 13:00' },
  { shortHour: '13:00', completeHour: '13:00 - 14:00' },
  { shortHour: '14:00', completeHour: '14:00 - 15:00' },
  { shortHour: '15:00', completeHour: '15:00 - 16:00' },
  { shortHour: '16:00', completeHour: '16:00 - 17:00' },
  { shortHour: '17:00', completeHour: '17:00 - 18:00' },
  { shortHour: '18:00', completeHour: '18:00 - 19:00' },
  { shortHour: '19:00', completeHour: '19:00 - 20:00' },
  { shortHour: '20:00', completeHour: '20:00 - 21:00' },
  { shortHour: '21:00', completeHour: '21:00 - 22:00' },
  { shortHour: '22:00', completeHour: '22:00 - 23:00' },
  { shortHour: '23:00', completeHour: '23:00 - 24:00' },
  { shortHour: '24:00', completeHour: '24:00 - 01:00' },
  { shortHour: '01:00', completeHour: '01:00 - 02:00' },
  { shortHour: '02:00', completeHour: '02:00 - 03:00' },
  { shortHour: '03:00', completeHour: '03:00 - 04:00' },
  { shortHour: '04:00', completeHour: '04:00 - 05:00' },
  { shortHour: '05:00', completeHour: '05:00 - 06:00' },
];

export const categories = [
  {
    id: 1,
    name: 'Disponibilidad',
  },
  {
    id: 2,
    name: 'Desempeño',
  },
  {
    id: 3,
    name: 'Calidad',
  },
];


export const boardPerAreas = [
  {
    area: 'ÁREA DE INGENIERÍA INDUSTRIAL',
    level1: true,
    level2: true,
    tableros: [
      { titulo: 'Ruta crítica', icono: '../assets/icons/crosshair.svg', path: 'ruta-critica', subidaTitulo: 'Subir archivo de Ruta Crítica', level: "Level 1"  },
      { titulo: 'Plan de Puntos', icono: '../assets/icons/PointsPlanIcon.svg', path: 'plan-de-puntos', subidaTitulo: 'Subir archivo de Plan de Puntos', level: "Level 1"  },
      { titulo: 'Ergonomía', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Ergonomía', level: "Level 2"  },
      { titulo: 'Desempeño Ruta Crítica', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Desempeño de Ruta Crítica', level: "Level 2"  },
      { titulo: 'OEE', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de OEE', level: "Level 2"  },
      { titulo: 'SCRAP', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de SCRAP', level: "Level 2"  },
      { titulo: 'Costos de Mantenimiento', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Costos de Mantenimiento', level: "Level 2"  },
      { titulo: 'Herramientas', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Herramientas', level: "Level 2"  },
      { titulo: 'VBZ', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de VBZ', level: "Level 2"  },
    ],
  },
  {
    area: 'ÁREA DE RECURSOS HUMANOS',
    level1: false,
    level2: true,
    tableros: [{ titulo: 'STIBA', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de STIBA', level: "Level 2"  }],
  },
  {
    area: 'ÁREA DE MANTENIMIENTO',
    level1: false,
    level2: true,
    tableros: [{ titulo: 'Reporte Disponibilidad', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Reporte de Disponibilidad', level: "Level 2"  }],
  },
  {
    area: 'ÁREA DE MONTAJE',
    level1: false,
    level2: true,
    tableros: [{ titulo: 'Fallas PPM', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Fallas PPM', level: "Level 2"  }],
  },
  {
    area: 'ÁREA DE CALIDAD',
    level1: false,
    level2: true,
    tableros: [
      { titulo: 'Auditoría de Motor', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Auditoría de Motor', level: "Level 2"  },
      { titulo: 'Evaluación QRK', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Evaluación QRK', level: "Level 2"  },
      { titulo: 'Fallas LB 7A/PC7', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Fallas LB 7A/PC7', level: "Level 2"  },
      { titulo: 'Evaluación Dimensional', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Evaluación Dimensional', level: "Level 2"  },
      { titulo: 'Impurezas', icono: 'icono2.png', path: '/plan-puntos', subidaTitulo: 'Subir archivo de Impureaz', level: "Level 2"  }],
  },
];