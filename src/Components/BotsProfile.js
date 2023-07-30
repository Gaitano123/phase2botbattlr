import React, { useState } from "react";
import BotIcon from "./BotIcon";
import BotDamage from "./BotDamage";
import BotHealth from "./BotHealth";

function BotsProfile({ bots, handleDelete, handleClick }){
    

    const botInfo =  bots.map((bot) => (
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
