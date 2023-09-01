import CellBoard from './CellBoard';


export default function HeadBoard() {
  return (
      <div className="grid grid-cols-6 grid-rows-1 border-b border-main_color h-full">
        <CellBoard title='' colSpan='2'/>
        <CellBoard title='Presente'/>
        <CellBoard title='Ausentes'/>
        <CellBoard title='Prestados'/>
        <CellBoard title='Capacitación/Taller KVP'/>
      </div>
  );
}
