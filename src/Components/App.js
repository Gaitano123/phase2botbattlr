import React, { useState, useEffect } from "react";
import BotsProfile from "./BotsProfile";

function App(){
    const [bots, setBots] = useState([])

    useEffect(() =>{
        fetch('http://localhost:4000/bots')
        .then(response => response.json())
        .then(data => setBots(data))
    }, [])

    return (
        <div>
            <BotsProfile bots={bots}/>
        </div>
    )
}

export default App;