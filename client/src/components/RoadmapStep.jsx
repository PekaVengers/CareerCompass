export default function RoadmapStep(props){
    return (
        <div className="container flex rounded-3xl gap-2 p-4 border ">
            <div className="number rounded-[50%] bg-[#D9FEDC] text-3xl text-[#2D2F30] p-2 w-[65px] h-[65px] flex justify-center items-center">
                {props.number}
            </div>
            <div className="desc text-lg mt-[11px]">
                {props.content}
            </div>
        </div>
    )
}