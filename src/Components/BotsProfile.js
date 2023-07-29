import React from "react";
import BotIcon from "./BotIcon";
import BotDamage from "./BotDamage";
import BotHealth from "./BotHealth";

function BotsProfile({ bots }){
    let army = []

    function handleClick(bot){
        if(!army.includes(bot.id)){
            fetch('http://localhost:4000/Army',{
                method: 'POST',
                headers:{
                    "content-type": "application/json",
                },
                body: JSON.stringify(bot)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }

    const botInfo =  bots.map((bot) => (
        <div key={bot.id} onClick={()=> handleClick(bot)} className="bot_container">
            <img className="avatar" src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
            <h2 className="bot_heading">{bot.name} <BotIcon botClass={bot.bot_class}/></h2>
            <p>{bot.catchphrase}</p>
            <div className="condition">
                <BotDamage damage={bot.damage}/>
                <BotHealth health={bot.health}/>
                <p><i className="fa-sharp fa-solid fa-shield-halved"></i>{bot.armor}</p>
            </div>
        </div>
    ))

    return(
        <div className="botscontainer">
           {botInfo}
        </div>
    )
}

export default BotsProfile;

    // function handleClick(bot){
    //     const army = {
    //         "name": bot.name,
    //         "avatar_url": bot.avatar,
    //         "catchphrase": bot.catchphrase,
    //         "damage": bot.damage,
    //         "health": bot.health,
    //         "armor": bot.armor
    //     }

    //     fetch('http://localhost:4000/Army',{
    //         method: 'POST',
    //         headers:{
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(army)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }