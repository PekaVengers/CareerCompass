import cardbook from "../assets/cardbook.png"
import ytimg from "../assets/ytImg.png"
import { Link } from "react-router-dom"
import { FaRegBookmark, FaBookmark } from "react-icons/fa";


export default function Card(props) {
    return (
        <div className="container flex mb-[27px] rounded-3xl">
            {props.type === 'book' ? (
                <div className="image">
                    <img className="rounded-l h-[100%] w-[100%] object-cover" src={cardbook} alt="" />
                </div>
            ) : props.type === 'yt' ? (
                <div className="image">
                    <img className="rounded-l h-[100%]" src={ytimg} alt="" />
                </div>
            ) : null}

            <div className="content flex text-lg px-3 py-1 flex-col gap-4 bg-[#D9FEDC] rounded-r w-[100%]">
                <div className="title font-bold flex justify-between">
                    <div>
                        {props.title}
                    </div>
                    {
                        !props.pfp &&
                        <button onClick={() => props.handleClick(props.ind)}>
                            {
                                props.isBookMarked
                                    ? <FaBookmark />
                                    : <FaRegBookmark />
                            }
                        </button>
                    }
                </div>
                <div className="desc text-lg">
                    {props.content.length > 150 ? props.content.slice(0, 150) + "..." : props.content}
                </div>
                <div className="flex gap-2">
                    <Link to={props.link} className="link text-lg underline">View Channel</Link>
                </div>
            </div>
        </div>
    )
}