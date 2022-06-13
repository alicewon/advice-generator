import React, { useState, useEffect, memo } from "react";
import Dice from './Dice';


function Card() {

  // remove
  useEffect(() => {
    console.log("re-rendered");
  });
  
  const [advice, setAdvice] = useState({});

  const adviceSet = (data) => {
    setAdvice(prevState => ({
      ...prevState,
      adviceId: data.adviceId,
      adviceText: data.adviceText
    })
  )};

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => adviceSet({adviceId: data.slip.id, adviceText: data.slip.advice}));
  };

  return (
    <div className="Card">
      <h4 className="Advice-id">Advice #{advice.adviceId} </h4>
      <h1 className="Advice-text">"{advice.adviceText}"</h1>
      <div className="Divider">divider svg goes here</div>
      <button className="Dice-button" onClick={()=> fetchAdvice()}>
        <Dice/>
      </button>
        
    </div>
  )
};

export default memo(Card);