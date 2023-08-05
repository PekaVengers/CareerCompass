import cardbook from "../assets/cardbook.png"

export default function Card(props){
    return(
        <div className="container flex max-h-[255px]">
            <div className="image">
                <img src={cardbook} alt="" />
            </div>
            <div className="content text-lg p-2 flex-col gap-2">
                <div className="title font-bold">
                    {props.title}
                </div>
                <div className="desc text-lg">
                    {props.content}
                </div>
                {props.type === 'price' ? (
                    <div className="price">
                        <div className="priceAmount text-xl font-bold">{props.priceAmount}</div>
                        <div className="link text-lg"><a href={props.link}>{props.link}</a></div>
                    </div>
                ) : props.type === 'yt' ? (
                    <div>hi</div>
                ) : null }
            </div>
        </div>
    )
}