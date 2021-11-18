import React, {useEffect, useState } from "react";
import MoodForm from "./MoodForm";
import MoodCard from "./MoodCard";
import MoodRecord from "./MoodRecord"

function MoodBoard () {
    const [moods, setMoods] = useState([]);
    const [listedMoods, setListedMoods] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6001/moods")
        .then(res => res.json())
        .then(data => setMoods(data))
    }, [])
    console.log(moods)

    function handleAddMood(newMood) {
        setMoods([...moods, newMood])
    }

    function handleRecordMood(aMood) {
        setListedMoods([...listedMoods, aMood])
    }
    
    const displayMoods = moods.map(mood => <MoodCard key={mood.id} mood={mood} handleRecordMood={handleRecordMood} /> )

    const recordedMoods = listedMoods.map(listedMood => <MoodRecord setListedMoods={setListedMoods}/>)

    return (
        <>
            <div>
                <h1>Mood Board</h1>
                <MoodForm handleAddMood= {handleAddMood}/>
                {displayMoods}
            </div>
            <div>
                {recordedMoods}
            </div>
            
        </>
    )
}

export default MoodBoard;