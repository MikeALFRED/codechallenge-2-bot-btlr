import React from "react";
import { NavLink } from "react-router-dom";

function Botcollection({
  setArmyBots,
  armyBots,
  bots,
  setBots,
  setBotSpecs,
}) {
  let shownBot = bots.map((bot) => {
    return(
    
      <li className="botLi" key={bot.id}>
        <NavLink
          to="/botspecs"
          className="LinkCollection"
          onClick={() => {
            setBotSpecs(bot);
          }}
        >
          <img src={bot.avatar_url} style={{ width: "70%" }} alt="bot" />
          <div
          >
            <h3 >
              {bot.name}
            </h3>
            <p >{bot.catchphrase}</p>
            <div>
              <span>
                <b>Health:</b> {bot.health}
              </span>{" "}
              <span>
                <b>Amour:</b> {bot.armor}
              </span>{" "}
              <span>
                <b>Damage:</b> {bot.damage}
              </span>
            </div>
          </div>
        </NavLink>
        <button
          className="deleteBtn"
          onClick={() => {
            setArmyBots(armyBots.filter((armBott) => armBott.id !== bot.id));
            setBots(bots.filter((bott) => bott.id !== bot.id));
          }}
        >
          X
        </button>
      </li>
    )
    
});

  return (
    <div>
      <h1>CHOOSE YOUR BOTS</h1>
      <ul className="botUl">{shownBot}</ul>
    </div>
  );
}


export default Botcollection