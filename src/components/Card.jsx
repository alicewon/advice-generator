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
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const adviceSet = (data) => {
    setAdvice(prevState => ({
      ...prevState,
      adviceId: data.adviceId,
      adviceText: data.adviceText
    })
  )};

  const fetchAdvice = () => {
    setIsButtonDisabled(true);
    
    setTimeout(function() {
      setIsButtonDisabled(false);
    }, 2000)

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => adviceSet({adviceId: data.slip.id, adviceText: data.slip.advice}));

    clearTimeout()
    
  };

  return (
    <section className="Card">
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
      <section className="Divider">
        { width < breakpoint ? <MobileDivider/> : <DesktopDivider/>}
      </section>
      <button className="Dice-button" aria-label="Dice Button" disabled={isButtonDisabled} onClick={()=> fetchAdvice()}>
        <Dice/>
      </button>
        
    </section>
  )
};

export default memo(Card);