import React, { useState, useEffect, memo } from "react";
import Dice from './Dice';

import LayoutWidth from './LayoutWidth';
import DesktopDivider from './DesktopDivider';
import MobileDivider from './MobileDivider';


function Card() {
  const width = LayoutWidth();
  const breakpoint = 620;

  // remove when done
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
      <h4 className="Advice-id">{
            advice.adviceId != undefined
            ? `Advice # ${advice.adviceId}`
            : "Advice Generator 3000"
          }
          </h4>
      <h1 className="Advice-text">{
            advice.adviceText != undefined
            ? `"${advice.adviceText}"`
            : "Welcome to the Advice Generator. Click the Dice below to start."
          }
          </h1>
      <div className="Divider">
        { width < breakpoint ? <MobileDivider/> : <DesktopDivider/>}
      </div>
      <button className="Dice-button" onClick={()=> fetchAdvice()}>
        <Dice/>
      </button>
        
    </div>
  )
};

export default memo(Card);