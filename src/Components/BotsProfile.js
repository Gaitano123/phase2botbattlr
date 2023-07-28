import React from "react";
import BotIcon from "./BotIcon";

function BotsProfile({ bots }){

    const botInfo =  bots.map((bot) => (
        <div key={bot.id}>
            <img src={bot.avatar_url} />
            <h2>{bot.name} <BotIcon botClass={bot.bot_class}/></h2>
            <p>{bot.catchphrase}</p>
            <div>
                <p><i class="fa-solid fa-heart-pulse"></i>{bot.damage}</p>
                <p><i class="fa-solid fa-bolt-lightning"></i>{bot.health}</p>
                <p><i class="fa-sharp fa-solid fa-shield-halved"></i>{bot.armor}</p>
            </div>
        </div>
    ))

    return(
        <div>
           {botInfo}
        </div>
    )
}

export default BotsProfile;