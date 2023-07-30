import React from "react";

function BotDamage({ damage }){

    let result = "";

    if( damage >= 50){
        result = <p className="damage_good"><i class="fa-solid fa-heart"></i>{damage}</p>
    }else {
        result = <p className="damage_bad"><i class="fa-solid fa-heart-pulse"></i>{damage}</p>
    }

    return result;
}

export default BotDamage;