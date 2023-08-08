import mentorImg from "../assets/mentorimg.png"
import SmallBox from "./SmallBox"
import { useState } from "react"

export default function MentorCard(props) {
    const [isBoxOpen, setIsBoxOpen] = useState(false);

    function handleButtonClick(){
        setIsBoxOpen(true);
    }

    function handleButtonClose(){
        setIsBoxOpen(false);
    }

    return(
    <div className="container flex max-h-[255px] mb-[27px] rounded-3xl">
        <img className="rounded-l h-[100%] w-[100%] object-cover" src={mentorImg} alt="" />
        <div className="content flex text-lg px-3 py-1 flex-col gap-4 bg-[#D9FEDC] rounded-r w-[100%]">
            <div className="title font-bold flex justify-between">
                {props.name}
                
            </div>
            <div className="desc text-lg">
                {props.content}
            </div>
            <div className="price">
                <div className="priceAmount text-sm">{props.num}</div>
                <div className="link text-sm underline">{props.mail}</div>
            </div>
            <div className="button">
                <button className="bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold" onClick={handleButtonClick}>Book Session</button>
                {isBoxOpen && <SmallBox onClose = {handleButtonClose}/>}
            </div>
        </div>
    </div>
    )
}