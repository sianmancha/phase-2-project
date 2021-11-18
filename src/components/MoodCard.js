import React, {useState} from "react";

function MoodCard({mood: {id, name, icon, baseMood}, handleAddRecord, mood}) {
    
    const [aMood, setAMood] = useState([])


    function handleAddClick(mood) {
        // const recordData = {
        //     name: name, 
        //     icon: icon
        // }
        
        fetch("http://localhost:6001/recordedMoods", {
                method: "POST",
                headers: {"Content-Type": "application/json", 
            }, 
                body: JSON.stringify(mood),
            })
            .then(res => res.json())
            .then(newRecord => handleAddRecord(newRecord))
    }

    return (
        <div className="card" onClick={() => handleAddClick(mood)}>
            <div className="icon">
                {icon}
            </div>
            <div className="name">
                {name}
            </div>
        </div>
    )
}

export default MoodCard;