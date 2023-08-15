import Topbar from "./Topbar";
import Table from "./Table";
import SubtopBar from "./SubtopBar";

export default function EscalatedIssues(){
    return(
        <div className="flex flex-1 border">
            <div className="grid grid-rows-7 grid-cols-1 bg-white w-[100%]">
                <div className="row-span-1">
                    <Topbar />
                </div>
                <div className="row-span-1">
                    <SubtopBar />
                </div>
                <div className="row-span-5">
                    <Table />
                </div>
            </div>
        </div>
    );
}