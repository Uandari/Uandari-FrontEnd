import checkIcon from "@assets/check.svg";
import xIcon from "@assets/x.svg";
import problemaDefinidoIcon from "@assets/problemaDefinido.svg";
import solucionDefinidaContramedidaIcon from "@assets/solucionDefinidaContramedida.svg";
import solucionEfectivaIcon from "@assets/solucionEfectiva.svg";
import solucionIntroducidaSeguimientoIcon from "@assets/solucionIntroducidaSeguimiento.svg";

export default function RowBoard({ data }:any){
    return (
        <div className="grid grid-cols-8 border-b border-main_color h-16">
            <div className="flex items-center justify-center text-main_gray border-r border-main_color">
                {data.fechaEscalamiento}
            </div>
            <div className="flex items-center justify-center text-main_gray border-r border-main_color">
                {data.desvioEscala}
            </div>
            <div className="flex items-center justify-center text-main_gray border-r border-main_color">
                {data.impulsor}
            </div>
            <div className="flex items-center justify-center text-main_gray border-r border-main_color">
                {data.afecta5s ? <img src={checkIcon} /> : <img src={xIcon}/>}
            </div>
            <div className="flex items-center justify-center text-main_gray border-r border-main_color">
                {data.medidaAcordada}
            </div>
            <div className="flex items-center justify-center text-main_gray border-r border-main_color">
                {data.idUsuario}
            </div>
            <div className="flex items-center justify-center text-main_gray border-r border-main_color">
                {data.plazo}
            </div>
            <div className="flex items-center justify-center text-main_gray border-r border-main_color">
                {data.estado === 1 && <img src={problemaDefinidoIcon} />}
                {data.estado === 2 && <img src={solucionDefinidaContramedidaIcon} />}
                {data.estado === 3 && <img src={solucionIntroducidaSeguimientoIcon} />}
                {data.estado === 4 && <img src={solucionEfectivaIcon} />}
            </div>
        </div>
    );
};