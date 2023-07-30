import React from "react";

function ArmyIcon({ armyClass }){

    let icon = ""

    if(armyClass === "Support"){
        icon = <i className="fa-solid fa-hand-fist"></i>
    } else if(armyClass === "Assault"){
        icon = <i className="fa-solid fa-gun"></i>
    }else if(armyClass === "Medic"){
        icon = <i className="fa-solid fa-truck-medical"></i>
    }else if(armyClass === "Captain"){
        icon = <i className="fa-solid fa-jet-fighter"></i>
    }else if(armyClass === "Defender"){
        icon = <i className="fa-sharp fa-solid fa-shield"></i>
    }else {
        icon = <i className="fa-solid fa-hat-wizard"></i>
    }

    return icon
}

export default ArmyIcon;