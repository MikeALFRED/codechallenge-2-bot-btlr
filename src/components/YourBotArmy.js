import React from "react";



function YourBotArmy({armyBots, setArmyBots}) {
  let  displayCards=armyBots.map((bot)=>{
    return(
        <li className= "botLi"
            key={bot.id} 
            onClick={(e) => {
                const allNew = armyBots.filter((armyBot) => armyBot.id !== bot.id);
                setArmyBots([...allNew]);
    }}
            >
            
              <img src={bot.avatar_url} style={{ width: "70%" }} alt="bot" />
        <div >
          <h3 >{bot.name}</h3>
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

      </li>
    );
  });   
            
  return (
    <div className="armyDiv">
      <h1>Your Bot Army</h1>
        <ul className="botUl">
          {displayCards}

        </ul>
      </div>
    
  );
}

export default YourBotArmy;