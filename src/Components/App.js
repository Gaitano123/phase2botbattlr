import React, { useState, useEffect } from "react";
import BotsProfile from "./BotsProfile";
import Army from "./Army";

function App(){
    const [bots, setBots] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/bots')
        .then(response => response.json())
        .then(data => setBots(data))
    }, [])

    return (
        <div>
            <Army />
            <BotsProfile bots={bots}/>
        </div>
    )
}

export default App;