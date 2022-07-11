import React, { useState, useEffect, memo } from "react";
import Dice from './Dice';

import LayoutWidth from './LayoutWidth';
import DesktopDivider from './DesktopDivider';
import MobileDivider from './MobileDivider';


function Card() {
  const width = LayoutWidth();
  const breakpoint = 620;
  
  const [advice, setAdvice] = useState({id: null, text: null});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const fetchAdvice = async () => {
    setIsButtonDisabled(true);
    
    setTimeout(function() {
      setIsButtonDisabled(false);
    }, 2000)

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => setAdvice({...advice, id: data.slip.id, text: data.slip.advice}));

    clearTimeout();
  };

  return (
    <section className="Card">
      <h4 className="Advice-id">{
            advice.id 
            ? `Advice # ${advice.id}`
            : "Advice Generator 3000"
          }
          </h4>
      <h1 className="Advice-text">{
            advice.text
            ? `"${advice.text}"`
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