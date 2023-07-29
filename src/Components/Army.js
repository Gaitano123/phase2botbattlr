import React, { useState, useEffect } from "react";
import ArmyDamage from "./ArmyDamage";
import ArmyHealth from "./ArmyHealth";
import ArmyIcon from "./ArmyIcon";

function Army(){
    const [army, setArmy] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/Army')
        .then(res => res.json())
        .then(data => setArmy(data))
    }, [])

    function handleClick(){
        fetch('http://localhost:4000/Army',{
            method: 'DELETE',
            headers:{
                "content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }


    return(
        <div className="armycontainer">
            <h2>ARMY</h2>
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
    )
}

export default Army;