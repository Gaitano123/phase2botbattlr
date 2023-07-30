import React from "react";

function BotHealth({ health }){
    let result =""
    if(health >=50){
        result = <p className="health_good"><i class="fa-solid fa-bolt-lightning"></i>{health}</p>
    }else{
        result = <p className="health_critical"><i class="fa-solid fa-bolt-lightning"></i>{health}</p>
    }
    
    return result;
}

export default BotHealth;