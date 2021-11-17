import React, {useState} from "react";

function MoodCard({mood: {id, name, icon, baseMood}}) {
    
    return (
        <div className="card">
            {name}
            {icon}
        </div>
    )
}

export default MoodCard;