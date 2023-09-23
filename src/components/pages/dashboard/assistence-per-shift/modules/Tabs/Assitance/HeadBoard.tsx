function HeadBoard() {
  return (
    <div className="grid grid-cols-5 border-y font-medium">
      <div className="h-20" />
      <div className="flex items-center justify-center border-x">Presentes</div>
      <div className="flex items-center justify-center">Ausentes</div>
      <div className="flex items-center justify-center border-x">Prestados</div>
      <div className="flex items-center justify-center">
        Capacitación / taller KVP
      </div>
    </div>
  );
}

export default HeadBoard;
