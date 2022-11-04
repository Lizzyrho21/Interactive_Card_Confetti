
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
            <h3>{cardNum}</h3>
            </div>
            </div> 
        </>
    );
}

export default CardBG ;