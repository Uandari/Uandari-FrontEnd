import Topbar from '@components/layout/topbar';
import { reportCardData } from '@mocks/ReportCard';
import { shiftsLabels } from '@mocks/Shifts';
import { Select } from 'antd';

import ReportCard from './ReportCard';
import RowReport from './RowReport';

function FiveS() {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex flex-1 flex-col">
      <Topbar title="5s" underline/>
      <div className="flex flex-1 overflow-y-auto bg-white ">
        <div className="flex flex-col w-[75%] overflow-y-scroll">
          <div className="p-4">
            <h2 className="font-medium text-xl text-main_title_color">
              Checklist Autogestión 5s
            </h2>
            <p className="text-main_text_color">Descripción de la desviación</p>

            <div className="flex gap-8 flex-wrap py-2 pt-6">
              <Select
                showSearch
                placeholder="Seleccionar línea"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={shiftsLabels}
              />
              <Select
                showSearch
                placeholder="Seleccionar turno"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={shiftsLabels}
              />
              <Select
                showSearch
                placeholder="Seleccionar tramo"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={shiftsLabels}
              />
              <Select
                showSearch
                placeholder="Seleccionar supervisor"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={shiftsLabels}
              />
              <Select
                showSearch
                placeholder="Seleccionar portavoz"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={shiftsLabels}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 border-y">
            <div className="col-span-3 p-3 border-r text-main_text_color">
              Descripción
            </div>
            <div className="col-span-1 border-r text-main_text_color grid grid-cols-2">
              <div className="flex justify-center items-center border-r">
                Sí
              </div>
              <div className="flex justify-center items-center">No</div>
            </div>
            <div className="col-span-3 p-3 border-r text-main_text_color">
              Observaciones
            </div>
          </div>
          <div className="px-4 py-2 w-full border-b bg-slate-100">
            Seleccionar
          </div>
          <RowReport
            help="Seleccionar lo necesario para realizar el proceso / HOE en ella se indica lo necesario para el proceso / En el entorno mirar  medios que no correspondan /Controlar también que los enseres personales (Bolsos, Comida, etc..) no esten fuera de la zona destinada."
            description="¿Esta la zona libre de piezas y/o objetos innecesarios en la zona de control?"
          />
          <RowReport
            help="Funcionalidad, rotos, en mal estado. De medios, herramientas, Andon, útiles, manipuladores, carros solidarios, etc."
            description="¿Esta la zona libre de medios y/o herramientas defectuosas en la zona de control?"
          />
          <RowReport
            help="Los medios que se acercan al vehículo llevan las protecciones adecuadas. Controlar también los epis y  la ropa propia de cada área."
            description="¿Esta la zona libre de medios y/o herramientas sin protecciones en la zona de control?"
          />
          <div className="px-4 py-2 w-full border-b bg-slate-100">Limpiar</div>
          <RowReport
            help="Suciedad generada por las personas, ya sea por dejadez o por falta de recursos necesarios / Controlar si el equipo dispone de los medios necesarios para la limpieza y si se encuentran en el lugar destinado. "
            description="¿Esta la zona libre de materiales  en la zona de control ? (Tornillos, tapones, piezas…) Desechos PROCESO"
          />
          <RowReport
            help="Piezas del proceso en el suelo o en lugares inadecuados / Mirar si existe material remontado."
            description="¿Esta la zona libre de suciedad generada en la zona de control ? (papeles, botellas, colillas, envoltorios y vasos fuera de papeleras…) Desechos EQUIPO"
          />
          <RowReport
            help="Desconchados, socavones, derrame de líquidos, rodadas, etc.."
            description="¿Están en buen estado los suelos de la zona de control ? (sin rodadas, sin desconchados…)"
          />
          <RowReport
            help="El mobiliario debe de estar limpio, sin roturas, sin adhesivos ni pintadas. Las zonas deben de estar bien alumbradas."
            description="¿Están en buen estado el mobiliario y el alumbrado  en la zona de control ? (papeleras, armarios, contenedores, estanterías, taquillas…) Zonas bien alumbradas"
          />
          <RowReport
            help="Observar las limpiezas técnicas en paredes , vidrieras, columnas, vallas, bolardos, / protecciones de tubos de calor / estructuras rotas / adhesivos inadecuados / roturas / perdidas de calor / fugas / etc..."
            description="¿Están en buen estado las puertas, columnas, vallas, ventanales y paredes de la zona de control ? (sin pintadas, sin adhesivos y en buen estado…)"
          />
          <RowReport
            help="Cada cosa en su sitio y un sitio para cada cosa. Respetar los stocks."
            description="¿Esta la zona libre de medios y/o contenedores y/o vehículos fuera de su ubicación?  (cajas, KLT's, herramientas, estanterías…)"
          />
          <RowReport
            help="Contenedores específicos para el residuo que se genera y correspondencia de los mismos: Contenedor-Residuo / Contenedores de basura correctamente definidos en su posición / observar si los contenedores se vacían regularmente."
            description="¿Se depositan los residuos en el contenedor correspondiente? "
          />
          <div className="px-4 py-2 w-full border-b bg-slate-100">
            Visualizar
          </div>
          <RowReport
            help="PROCESO: Medios, herramientas, armarios, carros, etc. Identificados y con ubicación."
            description="¿Están todos los medios/herramientas identificados en su ubicación?"
          />
          <RowReport
            help="LOGISTICA: correspondencia etiquetas de materiales."
            description="¿Están todas las ubicaciones de materiales identificados?  "
          />
          <RowReport
            help="TALLER: Material de montaje en azul, Material de rechazo en rojo, Medios de protección, herramientas, útiles, armarios, carros en amarillo, Residuos en verde."
            description="¿Se cumplen con las marcaciones de gestión visual? (pasillos, tactos, contenedores, estanterías...)"
          />
          <div className="px-4 py-2 w-full border-b bg-slate-100">
            Estandarizar
          </div>
          <RowReport
            help="Checklist y hoja de medidas 5S, en el panel del equipo."
            description="¿Están identificadas / documentadas por el equipo las desviaciones encontradas?"
          />
          <RowReport
            help="Hoja de medidas 5S escaladas al panel del RTF."
            description="¿Están escaladas / documentadas a nivel de RTF las desviaciones que el equipo no puede solucionar? "
          />
          <div className="px-4 py-2 w-full border-b bg-slate-100">Mantener</div>
          <RowReport
            help="Frecuencia: portavoz diaria a todo su equipo y supervisor semanal a todos los equipos que gestiona."
            description="¿Se realizan las revisiones del Checklist según la planificación acordada?"
          />
          <RowReport
            help="Revisión del indicador en las U de equipo. Semana de impresión y gráfica actualizada."
            description="¿Están actualizados los indicadores de orden y limpieza en los equipos?"
          />
          <RowReport
            help="No hay medidas fuera de plazo."
            description="¿Se encuentran corregidas las desviaciones de los chequeos anteriores a nivel de Equipo? "
          />
          <RowReport
            help="El equipo debe de recibir contestación a sus desvios escalados, para mantener actualizada la hoja de medidas."
            description="¿Se encuentran corregidas las desviaciones de los chequeos anteriores a nivel de RTF? (Escaladas) "
          />
          <div className="py-8 flex justify-end pr-8">
            <button
              type="button"
              className="bg-main_blue_dark text-white rounded-md py-1 px-6"
            >
              Guardar checklist
            </button>
          </div>
        </div>
        <div className="border-l overflow-y-scroll w-[38%]">
          <h3 className="font-medium text-xl p-4">Histórico de checklist</h3>
          <div className="flex gap-x-3 pl-4 mb-3">
            <Select
              showSearch
              placeholder="Seleccionar célula"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? '').includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={shiftsLabels}
            />
            <Select
              showSearch
              placeholder="Seleccionar turno"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? '').includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={shiftsLabels}
            />
          </div>
          {reportCardData.map((card) => (
            <ReportCard
              key={card.id}
              id={card.id}
              date={card.date}
              name={card.name}
              shift={card.shift}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FiveS;
