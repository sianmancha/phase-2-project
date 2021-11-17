import React, {useState} from "react";

function MoodCard({mood: {id, name, icon, baseMood}, handleRecordMood}) {
    
    const [aMood, setAMood] = useState([])


// function hasAName() {

//     handleRecordMood(aMood)
// }

    return (
        <div className="card" onClick={handleRecordMood}>
            {icon}
            {name}
        </div>
    )
}

export default MoodCard;