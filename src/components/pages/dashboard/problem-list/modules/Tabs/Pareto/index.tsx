import { useEffect, useState } from 'react';

import DownloadIcon from '@assets/icons/downloadIcon.svg';
import { paretoChart } from '@mocks/ParetoCharts';
import { DatePicker, DatePickerProps } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Chart from './Chart';

function Pareto() {
  const [currentWeek, setCurrentWeek] = useState('');
  const [btnLoader, setBtnLoader] = useState(false);
  // Función para convertir la fecha en el formato deseado
  function convertDate(originalDate: string) {
    const [year, week] = originalDate.split('-');
    const weekNumber = parseInt(week, 10);
    const januaryFirst = new Date(Number(year), 0, 1);
    const daysToAdd = (weekNumber - 1) * 7;
    const targetDate = new Date(januaryFirst);
    targetDate.setDate(januaryFirst.getDate() + daysToAdd);

    // Obtener el nombre del mes
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    const monthName = months[targetDate.getMonth()];

    // Obtener el día y año
    const day = targetDate.getDate();
    const formattedYear = targetDate.getFullYear();

    return `Semana ${week}, ${day} de ${monthName} de ${formattedYear}`;
  }

  const onChangeDate: DatePickerProps['onChange'] = (_, dateString) => {
    const parseDate = convertDate(dateString);
    setCurrentWeek(parseDate);
  };

  const handleDownloadPDF = async () => {
    const capture = document.getElementById('charts');
    setBtnLoader(true);
    if (capture) {
      html2canvas(capture).then((canvas) => {
        // Obtener la relación de aspecto de las imágenes originales
        const originalWidth = canvas.width;
        const originalHeight = canvas.height;

        // Configurar el tamaño del PDF
        // eslint-disable-next-line new-cap
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Calcular el nuevo tamaño de las imágenes para que se ajusten al PDF
        let newWidth;
        let newHeight;
        if (originalWidth > originalHeight) {
          newWidth = pageWidth;
          newHeight = (originalHeight / originalWidth) * newWidth;
        } else {
          newHeight = pageHeight;
          newWidth = (originalWidth / originalHeight) * newHeight;
        }

        // Agregar la imagen al PDF
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, newWidth, newHeight);

        // Guardar el PDF
        setBtnLoader(false);
        pdf.save(`Pareto_${currentWeek}.pdf`);
      });
    }
  };

  useEffect(() => {
    // Establecer la semana actual como valor predeterminado
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysDifference = Math.ceil(
      (currentDate.getTime() - startOfYear.getTime()) / millisecondsPerDay,
    );
    const weekNumber = Math.ceil((daysDifference + 1) / 7);
    const defaultWeek = `${year}-${weekNumber.toString().padStart(2, '0')}`;
    setCurrentWeek(convertDate(defaultWeek));
  }, []);

  return (
    <div className="flex flex-col h-full flex-1 pb-6">
      <div className="w-full flex justify-between px-4">
        <DatePicker
          suffixIcon={null}
          onChange={onChangeDate}
          picker="week"
          className="w-[300px] "
          allowClear={false}
        />
        <button
          disabled={!(btnLoader === false)}
          type="button"
          onClick={handleDownloadPDF}
          className="flex items-center bg-main_blue_dark gap-x-2 text-main_white px-4 py-2 rounded-lg"
        >
          <img src={DownloadIcon} alt="download-icon" />
          {btnLoader ? (
            <span> Descargando</span>
          ) : (
            <span> Descargar reporte en PDF</span>
          )}
        </button>
      </div>

      <div id="charts" className="w-full flex flex-col px-4 mt-4 gap-y-12">
        <div>
          <Chart
            key={1}
            title="Pareto temas de Volumen / Disponibilidad"
            date={currentWeek}
            data={paretoChart}
          />
        </div>
        <div>
          <Chart
            key={2}
            title="Calidad"
            date={currentWeek}
            data={paretoChart}
          />
        </div>
      </div>
    </div>
  );
}

export default Pareto;
