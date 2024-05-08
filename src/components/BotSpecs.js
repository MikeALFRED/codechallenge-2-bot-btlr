import React from "react";
import { Link as NavLink } from "react-router-dom";


function BotSpecs({ botSpecs, armyBots, setArmyBots }) {
  return (
    <div className="specDiv">
            <img
              alt="bot"
              src={botSpecs.avatar_url}
            />
          
          <div className="specContent">
            <h2>Name: {botSpecs.name}</h2>
            <p>
              <b>Catchphrase: </b>
              {botSpecs.catchphrase}
            </p>
            <p>
            <b>Class: </b>
              {botSpecs.bot_class}
            </p>
            <div >
             <span>
                <b>Health:</b>
                {botSpecs.health}
                </span>{""}
                <span>
                    <b>Amour:</b>
                    {botSpecs.armor}
                </span>{""}
                <span>
                    <b>Damage:</b>
                    {botSpecs.damage}
                </span>
                  </div>
                    
                  </div>
                  

                    <div className="btnSpec">
                     <button>
                        <NavLink className="navSpec btnSpec" to = "/codechallenge-2-bot-btlr">
                            Go Back
                        </NavLink>
               </button>
               <br></br>
               <br/>
            <button>
            <NavLink to="/codechallenge-2-bot-btlr" className="navSpec btnSpec" onClick={() => {
            let alreadyInBot = armyBots.includes(botSpecs);

            if (alreadyInBot) {
              setArmyBots([...armyBots]);
            } else {
              setArmyBots([...armyBots, botSpecs]);
            }
          }}>
              Enlist
              </NavLink>
            </button>
          </div>
        </div>
      
  );
}

export default BotSpecs;