import React, { useState, useEffect } from "react";
import BotsProfile from "./BotsProfile";
import Army from "./Army";

function App(){
    const [bots, setBots] = useState([])
    const [army, setArmy] = useState([])

    function fetchBots(){
        fetch('http://localhost:3000/bots')
        .then(response => response.json())
        .then(data => setBots(data))
    }

    function fetchArmy(){
        fetch('http://localhost:4000/Army')
        .then(res => res.json())
        .then(data => {
            setArmy(data)
        })
    }

    useEffect(() =>{
        fetchBots()
        fetchArmy()
    }, [])

    function handleDelete(botToDelete){

        fetch(`http://localhost:3000/bots${botToDelete.id}`,{
            method: 'DELETE',
            headers:{
                "content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBots(prevBots => prevBots.filter(bot => bot.id !== botToDelete.id));
        })
        .catch(error => {
            console.error("Error occurred while deleting:", error);
        });
    }

    function addArmy(bot){

        if (!army.find((armyBot) => armyBot.id === bot.id)) {
            fetch('http://localhost:4000/Army',{
                method: 'POST',
                headers:{
                    "content-type": "application/json",
                },
                body: JSON.stringify(bot)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
               setArmy((prevArmy) => [...prevArmy, bot]);
            })
        }
    }

    function deleteArmy(armyToDelete){

        fetch(`http://localhost:4000/Army/${armyToDelete.id}`,{
            method: 'DELETE',
            headers:{
                "content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setArmy(prevArmy => prevArmy.filter(bot => bot.id !== armyToDelete.id));
        })
        .catch(error => {
            console.error("Error occurred while deleting:", error);
        });
    }

    return (
        <div>
            <Army army={army} handleClick={deleteArmy}/>
            <BotsProfile bots={bots} handleDelete={handleDelete} handleClick={addArmy}/>
        </div>
    )
}

export default App;