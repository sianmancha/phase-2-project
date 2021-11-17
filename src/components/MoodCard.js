import React, {useState} from "react";

function MoodCard({mood: {id, name, icon, baseMood}}) {
    
    return (
        <div className="card">
            {icon}
            {name}
        </div>
    )
}

export default MoodCard;