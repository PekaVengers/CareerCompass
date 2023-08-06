export default function Sidebar(props){
    return (
        <>
        <div className="profile h-[14.375rem] w-[14.375rem] rounded-full bg-[#0FA958] flex justify-center items-center mb-[4.25rem] mx-[6.25rem]">
            <img className="rounded-full h-[12.5rem] w-[12.5rem]" src={props.img} alt="" />
        </div>
        <div className="info">
            <div className="name bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                {props.name}
            </div>
            <div className="email bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                {props.email}
            </div>
            <div className="location bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                {props.location}
            </div><div className="interest bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                {props.interest}
            </div><div className="aspiration bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                {props.aspiration}
            </div><div className="education bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                {props.education}
            </div>
        </div>
        </>
    )
}