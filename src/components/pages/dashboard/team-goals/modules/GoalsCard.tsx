type CardStatisticsProps = {
  title: string;
};

export default function GoalsCard({
  title,
}: CardStatisticsProps) {
  return (
    <div className="border border-main_color rounded-xl bg-main_white h-auto  w-auto flex flex-col ">
      <div className="bg-main_blue_bg flex justify-center items-center gap-x-2  rounded-t-xl py-2">
        <p className="text-main_gray text-md text-center">{title}</p>
      </div>
      <div className="flex-1 flex flex-col justify-center ml-6 gap-1.5 my-2">
          <div className="flex items-center ">
            <div className="rounded-sm w-4 h-4 bg-main_green"></div>
            <span className="ml-2">12 Objetivos cumplidos</span>
          </div>
          <div className="flex items-center">
            <div className="rounded-sm w-4 h-4 bg-main_yellow"></div>
            <span className="ml-2">12 Accidentes</span>
          </div>
          <div className="flex items-center">
            <div className="rounded-sm w-4 h-4 bg-main_red"></div>
            <span className="ml-2">12 Objetivos no cumplidos</span>
          </div>
          <div className="flex items-center">
            <div className="rounded-sm w-4 h-4 border border-gray-400"></div>
            <span className="ml-2">2 Días(s) libre de producción</span>
          </div>
      </div>
    </div>
  );
}
