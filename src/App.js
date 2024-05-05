
import React, {useEffect, useState} from "react";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";
import BotSpecs from "./components/BotSpecs";
import { Routes,Route } from "react-router-dom";
import './App.css'

function App() {
  let[armyBots,setArmyBots]=useState([])
  let[bots, setBots]=useState([])
  let[botSpecs, setBotSpecs]=useState({})



useEffect(()=>{
  fetch("https://json-deploy-1-ed8i.onrender.com/bots")
  .then(res=>res.json())
  .then(data=>setBots(data))
},[])


  return (
    <div className="App">
      <header>Bot Battlr</header>
    <YourBotArmy armyBots={armyBots} setArmyBots={setArmyBots}/>
      <Routes>
        <Route
            exact
            path="/"
            element={
              <BotCollection
              setBotSpecs={setBotSpecs}
              setArmyBots={setArmyBots}
              armyBots={armyBots}
              bots={bots}
              setBots={setBots}
            />
            }
            />
            <Route
            exact
            path="/botspecs"
            element={
              <BotSpecs
              botSpecs={botSpecs}
              setArmyBots={setArmyBots}
              armyBots={armyBots}
              />
            }
            />
      </Routes>
      
    </div>
  );
}

export default App;