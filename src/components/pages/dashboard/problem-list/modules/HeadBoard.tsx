function HeadBoard() {
  return (
    <div className="grid grid-cols-12 py-2 border-y border-main_color">
      <div className="col-span-2 text-sm font-medium text-main_title_color flex justify-center items-center">
        Descripción
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Auto / Tipo
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Turno
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Lunes
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Martes
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Miércoles
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Jueves
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Viernes
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Sábado
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Domingo
      </div>
      <div className="text-sm font-medium text-main_title_color flex justify-center items-center">
        Total
      </div>
    </div>
  );
}

export default HeadBoard;
