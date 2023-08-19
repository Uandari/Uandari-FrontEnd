import CellBoard from './CellBoard';

export default function HeadBoard() {
  return (
    <div className="grid grid-cols-8 border-b border-main_color h-[64px]">
      <CellBoard title="Fecha" />
      <CellBoard title="Desvio de escala" />
      <CellBoard title="Impulsor" />
      <CellBoard title="Afecta 5s" />
      <CellBoard title="Medida Acordada" />
      <CellBoard title="Responsable Implementación" />
      <CellBoard title="Plazo" />
      <CellBoard title="Estado" />
    </div>
  );
}
