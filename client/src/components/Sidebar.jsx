export default function Sidebar(props){
    console.log(props.img);
    return (
        <>
        <div className="profile h-[14.375rem] w-[14.375rem] rounded-full flex justify-center items-center mb-[4.25rem] mx-[6.25rem]">
            <img className="rounded-full h-[12.5rem] w-[12.5rem]" src={"https://avatars.githubusercontent.com/u/75559082?v=4"} alt="" />
        </div>
        <div className="info">
            <div className="name bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                <span className="font-bold">Name:</span> {props.name}
            </div>
            <div className="email bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                <span className="font-bold">Email:</span> {props.email}
            </div>
            <div className="location bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                <span className="font-bold">Strengths:</span> {props.strength}
            </div><div className="interest bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                <span className="font-bold">Interests:</span> {props.interest}
            </div><div className="aspiration bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
                <span className="font-bold">Aspiration:</span> {props.aspiration}
            </div><div className="education bg-[#D9FEDC] text-xl rounded-2xl p-[1.375rem] mb-[1.5rem]">
            <span className="font-bold">Educaton Level:</span> {props.education}
            </div>
        </div>
        </>
    )
}