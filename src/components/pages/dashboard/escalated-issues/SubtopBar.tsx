import Filter from "./Filter";
import ShiftTab from "./ShiftTab";

export default function SubtopBar(){
    return(
        <div className="border border-b-main_color h-12 flex justify-between gap-x-6 p-4">
            <div className='flex items-center justify-center'>
                <ShiftTab shift="Turno A"/>
            </div>
            <div className='flex items-center justify-center gap-x-6'>
                <Filter title="Filtrar por estado"/>
                <Filter title="Filtrar por fecha"/>
            </div>
        </div>  
    );
};