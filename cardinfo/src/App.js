// import "./App.css";
// import { useState} from "react";
// import cardFront from './bg-card-front.png';
// import cardBack from './bg-card-back.png';
import CardBG from './components/CardBG';

function App() {
  // Values for cards
  // const [name, setName] = useState("John Appleseed");
  // const [cardNum, setCardNum] = useState("0000 0000 0000");
  // const [expiration, setExpDate] = useState("00/00");
  // const [cvc, setCvc] = useState("000");
  // }); // once card is added, place it in array

  // create a class of card to instantiate when form is submitted
  class Card {
    constructor(name, cardNum, expiration, cvc) {
      this.name = name;
      this.cardNum = cardNum;
      this.expiration = expiration;
      this.cvc = cvc;
    }
  }
  // handle submit for cards
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let card = new Card(name, cardNum, expiration, cvc);
  //   console.log(card);
  // };

  // const handleCard = (e) => {
  
  // // as the user enters the card number 
  // // check if the value enter has match 4 characters
  // // after 4 characters, add a space
  // // reformat the card value state
  //   console.log(e.length);
  //   if(e.length % 4 === 0){
  //     // eslint-disable-next-line no-const-assign
  //     console.log('I hit 4!');
  //     setCardNum("Hello");
  //     console.log(cardNum);
  //   }
  
  // }


  return (
    // <div className="App">
    //   {/* Inside, we will have our containers for images and the form */}
    //   {/* Parent container for images */}
    //   <div className="img-section">
    //     {/* Top img container */}
    //   <div className="image-stack__item image-stack__item--top">
      
    //     <img src={cardFront} alt="cards-front" width="250px" />

    //     {/* TODO: Figure out how to change card num values */}
    //     <h1 className="image-stack__item image-stack__item--cardnumbers">{cardNum}</h1>
    //     <h2 className="image-stack__item image-stack__item--cardname">{name}</h2>
    //     <h2 className="image-stack__item image-stack__item--cardexp">{expiration}</h2>

    //     <svg className="image-stack__item--logo "  viewBox="0 0 80 80" width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>

    //     </div>
    
    //     {/* Bottom img container */}
    //     <div className="image-stack__item image-stack__item--bottom">
    //     <h3 className="image-stack__item image-stack__item--cvc">{cvc}</h3>
    //     <img src={cardBack} alt="cards-back" width="250px" />   
    //     </div>



    //   </div>
    //   <div className="form-container">
    //     <form onSubmit={(e) => handleSubmit(e)}>
    //       <label className="card-label">Cardholder Name</label>
    //       <br />
    //       <input
    //         name="name"
    //         type="text"
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <br />
    //       <label className="card-label">Cardholder Number</label>
    //       <br />
    //       <input
    //         name="cardNum"
    //         type="text"
    //         placeholder="e.g. 1234 5678 9123 0000"
    //         onChange={(e) => setCardNum(e.target.value)}
    //       />
    //       <br />
    //       <label className="card-label">Cardholder EXP</label>
    //       <br />
    //       <input
    //         name="ExDate"
    //         type="text"
    //         onChange={(e) => setExpDate(e.target.value)}
    //       />

    //       <br />
    //       <label className="card-label">CVC</label>
    //       <br />
    //       <input
    //         name="cvc"
    //         type="text"
    //         onChange={(e) => setCvc(e.target.value)}
    //       />
    //       <br />

    //       <input type="submit" />
    //     </form>
    //   </div>
    // </div>
    <>
    <CardBG />
    </>
  );
}

export default App;
