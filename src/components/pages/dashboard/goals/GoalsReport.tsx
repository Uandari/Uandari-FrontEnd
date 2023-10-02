import { useEffect, useState } from 'react';

import { goalsStatus } from '@mocks/GoalsStatus';
import { DatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import DownloadIcon from '@assets/icons/downloadIcon.svg';

export type GoalReportProps = {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
};

function GoalsReport({ year, setYear }: GoalReportProps) {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setYear(dateString);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    setYear(String(currentYear));
  }, [setYear]);

  const [btnLoader, setBtnLoader] = useState(false);
  const [currentWeek, setCurrentWeek] = useState('');

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
  return (
    <div id='charts'>
      <div className="flex justify-between pb-8">
        <h3 className="text-xl font-medium pb-3">Reporte de metas</h3>
        <DatePicker
          onChange={onChange}
          picker="year"
          defaultValue={dayjs()}
          format="YYYY"
        />
      </div>
      {goalsStatus.map((goalStatus) => (
        <div className="relative">
          <div className="w-full h-[6px] rounded-full bg-main_blue_bg" />
          <div
            className="h-[6px] duration-300 transition-all  bg-main_blue_dark rounded-full absolute top-0 left-0"
            style={{
              width: `${(goalStatus.currentGoal / goalStatus.total) * 100}%`,
            }}
          />
          <div className="pb-8 pt-1 flex items-center justify-between">
            <p className="text-sm text-main_text_color">{goalStatus.month}</p>
            <p className="text-sm text-main_text_color">
              {goalStatus.currentGoal} de {goalStatus.total}
            </p>
          </div>
        </div>
      ))}
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
  );
}

export default GoalsReport;
