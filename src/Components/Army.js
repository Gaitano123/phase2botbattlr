import React from "react";
import ArmyDamage from "./ArmyData/ArmyDamage";
import ArmyHealth from "./ArmyData/ArmyHealth";
import ArmyIcon from "./ArmyData/ArmyIcon";

function Army({ army, handleClick }){


    return(
        <div className="army_can">
            <h2 className="army_heading">ARMY</h2>
            <div className="armycontainer">
                {army.map(army => (
                    <div key={army.id} className="army_container" onClick={() => handleClick(army)}>
                        <img className="avatar" src={army.avatar_url} alt={`Avatar of ${army.name}`} />
                        <h2 className="bot_heading">{army.name} <ArmyIcon armyClass={army.bot_class}/></h2>
                        <p>{army.catchphrase}</p>
                        <div className="condition">
                            <ArmyDamage damage={army.damage}/>
                            <ArmyHealth health={army.health}/>
                            <p><i className="fa-sharp fa-solid fa-shield-halved"></i>{army.armor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Army;