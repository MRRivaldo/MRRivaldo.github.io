import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src="/images/react-pc.png"
              text="Pomodoro Clock"
              label="React"
              url="https://react-pomodoroclockjs.netlify.app/"
            />
            <CardItem
              src="images/react-calc.png"
              text="Calculator"
              label="React"
              url="https://react-calculatorjs.netlify.app/"
            />
            <CardItem
              src="images/react-pg.png"
              text="Password Generator"
              label="React"
              url="https://pwgenerator-rivaldo.netlify.app/"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src="images/react-dm.png"
              text="Drum Machines"
              label="React"
              url="https://reactjs-drummachines.netlify.app/"
            />
            <CardItem
              src="images/react-mp.png"
              text="Markdwon Previewer"
              label="React"
              url="https://react-markdown-previewer-pj.netlify.app/"
            />
            <CardItem
              src="images/react-rq.png"
              text="Random Quote"
              label="React"
              url="https://react-randomquote.netlify.app/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
