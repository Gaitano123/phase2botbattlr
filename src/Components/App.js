import React, { useState, useEffect } from "react";
import BotsProfile from "./BotsProfile";
import Army from "./Army";
import Sort from "../Sort";

function App(){
    const [bots, setBots] = useState([])
    const [army, setArmy] = useState([])
    const [sortBot, setSortBot] = useState(null)
    const [loading, setLoading] = useState(true)

    function fetchBots(){
        fetch('https://bots-6i0k.onrender.com/bots')
        .then(response => response.json())
        .then(data => {
            setBots(data)
            setLoading(false)
        })
    }

    function fetchArmy(){
        fetch('https://army-7k3t.onrender.com/Army')
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

        fetch(`https://bots-6i0k.onrender.com/bots${botToDelete.id}`,{
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
            fetch('https://army-7k3t.onrender.com/Army',{
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

        fetch(`https://army-7k3t.onrender.com/Army/${armyToDelete.id}`,{
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

    function handleSort(sortBot){
        setSortBot(sortBot)
    }

    return (
        <div>
            <Army army={army} handleClick={deleteArmy}/>
            <Sort onSort={handleSort}/>
            {loading ? (
                <h1 className="loading">loading...</h1>
            ) :(
                <BotsProfile bots={bots} handleDelete={handleDelete} handleClick={addArmy} sortBot={sortBot}/>
            )}
        </div>
    )
}

export default App;