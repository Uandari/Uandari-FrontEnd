import { useEffect, useState } from 'react';

export type CardTabProps = {
  status: string;
  problem: string;
  description: string;
};

function CardTab({ status, problem, description }: CardTabProps) {
  const [statusColor, setStatusColor] = useState<string>();
  useEffect(() => {
    if (status === 'Solucionado') {
      setStatusColor('bg-main_green');
    } else if (status === 'En proceso') {
      setStatusColor('bg-main_yellow');
    } else if (status === 'Escalado') {
      setStatusColor('bg-main_red');
    }
  }, [setStatusColor, status]);
  return (
    <button className="text-left hover:bg-slate-200" type="button">
      <div className="px-1 py-4 border-b border-main_color">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${statusColor} bg-ma`} />
          <div className="text-main_text_color text-sm"> {status} </div>
        </div>
        <h4 className="text-lg font-medium text-main_title_color">{problem}</h4>
        <p>{description}</p>
      </div>
    </button>
  );
}

export default CardTab;
