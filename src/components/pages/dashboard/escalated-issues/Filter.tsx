import filterIcon from "@assets/filter.svg";

export type FilterProps ={
    title:string;
};

export default function Filter({title}:FilterProps){

    return(
        <div className="text-main_gray border-2 rounded-lg border-main_border w-52 h-8 flex justify-center items-center">
            <span><img src={filterIcon}/></span>
            <select className="pr-8">
                <option value="" disabled selected>{title}</option>
            </select>
        </div>
    );
};