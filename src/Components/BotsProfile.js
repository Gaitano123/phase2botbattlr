import React from "react";
import BotIcon from "./BotData/BotIcon";
import BotDamage from "./BotData/BotDamage";
import BotHealth from "./BotData/BotHealth";

function BotsProfile({ bots, handleDelete, handleClick, sortBot }){

    const sortedBots = [...bots];
    if (sortBot === "health") {
      sortedBots.sort((a, b) => b.health - a.health);
    } else if (sortBot === "damage") {
      sortedBots.sort((a, b) => b.damage - a.damage);
    } else if (sortBot === "armor") {
      sortedBots.sort((a, b) => b.armor - a.armor);
    }
    
    const botInfo =  sortedBots.map((bot) => (
        <div key={bot.id} className="bot_container">
            <div onClick={()=> handleClick(bot)}>
                <img className="avatar" src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
                <h2 className="bot_heading">{bot.name} <BotIcon botClass={bot.bot_class}/></h2>
                <p>{bot.catchphrase}</p>
                <div className="condition">
                    <BotDamage damage={bot.damage}/>
                    <BotHealth health={bot.health}/>
                    <p><i className="fa-sharp fa-solid fa-shield-halved"></i>{bot.armor}</p>
                </div>
            </div>
            <button onClick={() => handleDelete(bot)} type="button" className="btn btn-danger delete">X</button>
        </div>
    ))

    return(
        <div className="botscontainer">
           {botInfo}
        </div>
    )
}

export default BotsProfile;
