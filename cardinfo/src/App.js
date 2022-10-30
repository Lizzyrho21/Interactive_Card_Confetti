import "./App.css";
import { useState } from "react";
import cardFront from './bg-card-front.png';
import cardBack from './bg-card-back.png';

function App() {
  // Values for cards
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("0000 0000 0000");
  const [expiration, setExpDate] = useState("");
  const [cvc, setCvc] = useState(null);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    let card = new Card(name, cardNum, expiration, cvc);
    console.log(card);
  };

  const handleCard = (e) => {
console.log(e.target.value);
  }

  return (
    <div className="App">
      {/* Inside, we will have our containers for images and the form */}
      {/* Parent container for images */}
      <div className="img-section">
        {/* Top img container */}
      <div className="image-stack__item image-stack__item--top">
        <img src={cardFront} alt="cards-front" width="250px" />
        {/* TODO: Figure out how to change card num values */}
        <h1 onChange={(e) => handleCard(e.target.value) }className="image-stack__item image-stack__item--cardnumbers">{cardNum}</h1>
        </div>
        {/* Bottom img container */}
        <div className="image-stack__item image-stack__item--bottom">
        <img src={cardBack} alt="cards-back" width="250px" />        
        </div>
        <svg className="image-stack__item--logo "  viewBox="0 0 80 80" width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>


      </div>
      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="card-label">Cardholder Name</label>
          <br />
          <input
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className="card-label">Cardholder Number</label>
          <br />
          <input
            name="cardNum"
            type="text"
            onChange={(e) => setCardNum(e.target.value)}
          />
          <br />
          <label className="card-label">Cardholder EXP</label>
          <br />
          <input
            name="ExDate"
            type="text"
            onChange={(e) => setExpDate(e.target.value)}
          />

          <br />
          <label className="card-label">CVC</label>
          <br />
          <input
            name="cvc"
            type="text"
            onChange={(e) => setCvc(e.target.value)}
          />
          <br />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
