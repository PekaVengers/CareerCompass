import cardbook from "../assets/cardbook.png"
import bookmark from "../assets/bookmark.svg"
import like from "../assets/like.png"
import dislike from "../assets/dislike.png"
import ytimg from "../assets/ytImg.png"

export default function Card(props){
    return(
        <div className="container flex max-h-[255px] mb-[27px] rounded-3xl">
            {props.type === 'price' ? (
                <div className="image">
                <img className="rounded-l max-h-[255px] w-[100%]"  src={cardbook} alt="" />
                </div>
            ) : props.type === 'yt' ? (
                    <div className="image">
                        <img className = "rounded-l h-[115px] w-[100%]" src={ytimg} alt="" />
                    </div>
            ) : null}
            
            <div className="content text-lg px-3 py-1 flex-col gap-4 bg-[#D9FEDC] rounded-r w-[100%]">
                <div className="title font-bold flex justify-between">
                    {props.title}
                    <img className="w-[40px] h-[40px]" src={bookmark} alt="" />
                </div>
                <div className="desc text-lg">
                    {props.content}
                </div>
                {props.type === 'price' ? (
                    <div className="price">
                        <div className="priceAmount text-xl font-bold">{props.priceAmount}</div>
                        <div className="link text-lg underline"><a href={props.link}>{props.link}</a></div>
                    </div>
                ) : props.type === 'yt' ? (
                    <div className="flex gap-2">
                        <img src={like} alt="" />
                        <img src={dislike} alt="" />
                    </div>
                ) : null }
            </div>
        </div>
    )
}