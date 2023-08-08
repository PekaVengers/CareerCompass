import styled from "styled-components"


    const BoxContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 750px;
    height: 316px;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    padding: 20px;    
    `;

    const CloseButton = styled.div`
    margin-top : 10px;
    cursor : pointer;
    `;

    const SmallBox = (props) => {
        return (
            <BoxContainer style={{borderRadius : "16px"}}>
                <div className="flex justify-end">
                <CloseButton onClick = {props.onClose}><div className="underline">Close</div></CloseButton>
                </div>
                <div className="container flex flex-col gap-2">
                    <div className="title text-3xl font-bold">Want to Book a Session ?</div>
                    <input className="border rounded p-2" type="text" placeholder="Enter the date"/>
                    <input className="border rounded p-2" type="text" placeholder="Enter the time"/>
                </div>
                <div className="buttons flex justify-end gap-2 mt-2">
                    <button className="w-[180px] h-[44px] text-lg p-2 rounded border border-black">No, Cancel</button>
                    <button className="w-[180px] h-[44px] bg-[#63AF58] text-white text-lg p-2 rounded border border-black">Yes, Confirm</button>
                </div>
            </BoxContainer>
        )
    }

    export default SmallBox;

