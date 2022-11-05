
import '../CardBG.css';
import { useState} from "react";




function CardBG() {

const [name, setName] = useState("John Appleseed");
  const [cardNum, setCardNum] = useState("0000 0000 0000");
  const [expiration, setExpDate] = useState("00/00");
  const [cvc, setCvc] = useState("000");
    return (  
        <>
        <div className="main-container">
        <div className="image-stack__item image-stack__item--back">
                <h4>{cvc}</h4>
                </div>


        <div className="image-stack__item image-stack__item--front">
<svg className="deets icon" viewBox="0 0 100 100" width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
            <h3 className="deets cardNum">{cardNum}</h3>
            <h3 className="deets cardName">{name}</h3>
            <h3 className="deets cardEx">{expiration}</h3>
            </div>
            </div> 
        </>
    );
}

export default CardBG ;