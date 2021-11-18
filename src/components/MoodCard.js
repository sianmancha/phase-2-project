import React, {useState} from "react";

function MoodCard({mood: {id, name, icon, baseMood}, handleRecordMood, mood}) {
    
    const [aMood, setAMood] = useState([])


// function hasAName(id) {
//     setAMood()
// }

    return (
        <div className="card" onClick={() => handleRecordMood(mood)}>
            {icon}
            {name}
        </div>
    )
}

export default MoodCard;