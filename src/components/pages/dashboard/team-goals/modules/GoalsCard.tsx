type CardStatisticsProps = {
  title: string;
  done: number;
  accidents: number;
  incomplete: number;
  free: number;
};

export default function GoalsCard({
  title,
  done,
  accidents,
  incomplete,
  free,
}: CardStatisticsProps) {
  return (
    <div className="border border-main_color rounded-xl bg-main_white flex flex-col h-[200px]">
      <div className="bg-main_blue_bg flex justify-center items-center gap-x-2 rounded-t-xl py-2">
        <p className="text-main_gray text-md text-center">{title}</p>
      </div>
      <div className="flex-1 flex flex-col justify-center ml-6 gap-1.5 my-2">
        <div className="flex items-center ">
          <div className="rounded-sm w-4 h-4 bg-main_green" />
          <span className="ml-2 text-sm">{done} Objetivos cumplidos</span>
        </div>
        <div className="flex items-center">
          <div className="rounded-sm w-4 h-4 bg-main_yellow" />
          <span className="ml-2 text-sm">{accidents} Accidentes</span>
        </div>
        <div className="flex items-center">
          <div className="rounded-sm w-4 h-4 bg-main_red" />
          <span className="ml-2 text-sm">
            {incomplete} Objetivos no cumplidos
          </span>
        </div>
        <div className="flex items-center">
          <div className="rounded-sm w-4 h-4 bg-blue-500 " />
          <span className="ml-2 text-sm">
            {free} Días(s) libre de producción
          </span>
        </div>
      </div>
    </div>
  );
}
