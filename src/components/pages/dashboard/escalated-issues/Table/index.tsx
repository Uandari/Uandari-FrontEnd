import HeadTitle from "./Boards/BoardPieces/HeadTitle";
import RowBoard from "./Boards/BoardPieces/RowBoard";

export default function Table(){
const jsonData = [
    {
      "idEscalaProblema": 1,
      "fechaEscalamiento": "2023-08-01",
      "desvioEscala": "Lorem ipsum 1",
      "impulsor": "Impulsor 1",
      "afecta5s": true,
      "medidaAcordada": "Lorem ipsum 2",
      "idUsuario": 101,
      "plazo": "2023-08-10",
      "estado": 1
    },
    {
      "idEscalaProblema": 2,
      "fechaEscalamiento": "2023-08-02",
      "desvioEscala": "Lorem ipsum 3",
      "impulsor": "Impulsor 2",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 4",
      "idUsuario": 102,
      "plazo": "2023-08-11",
      "estado": 2
    },
    {
      "idEscalaProblema": 3,
      "fechaEscalamiento": "2023-08-03",
      "desvioEscala": "Lorem ipsum 5",
      "impulsor": "Impulsor 3",
      "afecta5s": true,
      "medidaAcordada": "Lorem ipsum 6",
      "idUsuario": 103,
      "plazo": "2023-08-12",
      "estado": 3
    },
    {
      "idEscalaProblema": 4,
      "fechaEscalamiento": "2023-08-04",
      "desvioEscala": "Lorem ipsum 7",
      "impulsor": "Impulsor 4",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 8",
      "idUsuario": 104,
      "plazo": "2023-08-13",
      "estado": 4
    },
    {
      "idEscalaProblema": 5,
      "fechaEscalamiento": "2023-08-05",
      "desvioEscala": "Lorem ipsum 9",
      "impulsor": "Impulsor 5",
      "afecta5s": true,
      "medidaAcordada": "Lorem ipsum 10",
      "idUsuario": 105,
      "plazo": "2023-08-14",
      "estado": 1
    },
    {
      "idEscalaProblema": 6,
      "fechaEscalamiento": "2023-08-06",
      "desvioEscala": "Lorem ipsum 11",
      "impulsor": "Impulsor 6",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 12",
      "idUsuario": 106,
      "plazo": "2023-08-15",
      "estado": 2
    },
    {
      "idEscalaProblema": 7,
      "fechaEscalamiento": "2023-08-07",
      "desvioEscala": "Lorem ipsum 13",
      "impulsor": "Impulsor 7",
      "afecta5s": true,
      "medidaAcordada": "Lorem ipsum 14",
      "idUsuario": 107,
      "plazo": "2023-08-16",
      "estado": 3
    },
    {
      "idEscalaProblema": 8,
      "fechaEscalamiento": "2023-08-08",
      "desvioEscala": "Lorem ipsum 15",
      "impulsor": "Impulsor 8",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 16",
      "idUsuario": 108,
      "plazo": "2023-08-17",
      "estado": 4
    },
    {
      "idEscalaProblema": 9,
      "fechaEscalamiento": "2023-08-09",
      "desvioEscala": "Lorem ipsum 17",
      "impulsor": "Impulsor 9",
      "afecta5s": true,
      "medidaAcordada": "Lorem ipsum 18",
      "idUsuario": 109,
      "plazo": "2023-08-18",
      "estado": 1
    },
    {
      "idEscalaProblema": 10,
      "fechaEscalamiento": "2023-08-10",
      "desvioEscala": "Lorem ipsum 19",
      "impulsor": "Impulsor 10",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 20",
      "idUsuario": 110,
      "plazo": "2023-08-19",
      "estado": 2
    },
    {
      "idEscalaProblema": 11,
      "fechaEscalamiento": "2023-08-10",
      "desvioEscala": "Lorem ipsum 19",
      "impulsor": "Impulsor 10",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 20",
      "idUsuario": 110,
      "plazo": "2023-08-19",
      "estado": 2
    },
    {
      "idEscalaProblema": 12,
      "fechaEscalamiento": "2023-08-10",
      "desvioEscala": "Lorem ipsum 19",
      "impulsor": "Impulsor 10",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 20",
      "idUsuario": 110,
      "plazo": "2023-08-19",
      "estado": 2
    },
    {
      "idEscalaProblema": 13,
      "fechaEscalamiento": "2023-08-10",
      "desvioEscala": "Lorem ipsum 19",
      "impulsor": "Impulsor 10",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 20",
      "idUsuario": 110,
      "plazo": "2023-08-19",
      "estado": 2
    },
    {
      "idEscalaProblema": 10,
      "fechaEscalamiento": "2023-08-10",
      "desvioEscala": "Lorem ipsum 19",
      "impulsor": "Impulsor 10",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 20",
      "idUsuario": 110,
      "plazo": "2023-08-19",
      "estado": 2
    },
    {
      "idEscalaProblema": 14,
      "fechaEscalamiento": "2023-08-10",
      "desvioEscala": "Lorem ipsum 19",
      "impulsor": "Impulsor 10",
      "afecta5s": false,
      "medidaAcordada": "Lorem ipsum 20",
      "idUsuario": 110,
      "plazo": "2023-08-19",
      "estado": 2
    },
    {
      "idEscalaProblema": 15,
      "fechaEscalamiento": "2023-08-10",
      "desvioEscala": "Lorem ipsum 19",
      "impulsor": "Impulsor 10",
      "afecta5s": false,
      "medidaAcordada": "FINAL",
      "idUsuario": 110,
      "plazo": "2023-08-19",
      "estado": 2
    }
  ];

    return(
        <>
        <div className="grid h-full grid-rows-[7]">
            <div className="row-span-1">
            <HeadTitle />
            </div>
            <div className="overflow-y-auto row-span-6 hide-scrollbar">
              {jsonData.map((data,index) =>(
                <RowBoard key={index} data={data}/>
              ))}
            </div>
        </div>

        </>
    );
};