import React, { useState, useEffect } from "react";

function Army(){
    const [army, setArmy] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Army')
        .then(res => res.json())
        .then(data => setArmy(data))
    }, [])

    console.log(army)

    return(
        <div>Welcome</div>
    )
}

export default Army;