import React from "react";

function BotIcon({ botClass }){

    let icon = ""

    if(botClass === "Support"){
        icon = <i class="fa-solid fa-handshake-angle"></i>
    } else if(botClass === "Assault"){
        icon = <i class="fa-solid fa-gun"></i>
    }else if(botClass === "Medic"){
        icon = <i class="fa-solid fa-truck-medical"></i>
    }else if(botClass === "Captain"){
        icon = <i class="fa-solid fa-jet-fighter"></i>
    }else if(botClass === "Defender"){
        icon = <i class="fa-sharp fa-solid fa-shield"></i>
    }else {
        icon = <i class="fa-solid fa-hat-wizard"></i>
    }

    return icon
}

export default BotIcon;