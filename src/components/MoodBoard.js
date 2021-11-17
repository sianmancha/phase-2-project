import React, {useEffect, useState } from "react";
import MoodForm from "./MoodForm";
import MoodCard from "./MoodCard";

function MoodBoard () {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6001/moods")
        .then(res => res.json())
        .then(data => setMoods(data))
    }, [])
    console.log(moods)

    function handleAddMood(newMood) {
        setMoods([...moods, newMood])
    }

    const displayMoods = moods.map(mood => <MoodCard key={mood.id } mood={mood} /> )

    return (
        <div>
            <h1>Mood Board</h1>
            <MoodForm handleAddMood= {handleAddMood}/>
            {displayMoods}
            
            
        </div>
    )
}

export default MoodBoard;