import React from "react";

function BotsProfile({ bots }){
    return(
        <div>
            {bots.map((bot) => (
                <div key={bot.id}>
                    <img src={bot.avatar_url} />
                    <h2>{bot.name}</h2>
                    <p>{bot.catchphrase}</p>
                    <div>
                        <p><i class="fa-solid fa-heart-pulse"></i>{bot.damage}</p>
                        <p><i class="fa-solid fa-bolt-lightning"></i>{bot.health}</p>
                        <p><i class="fa-sharp fa-solid fa-shield-halved"></i>{bot.armor}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BotsProfile;