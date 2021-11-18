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

    function handleAddRecord(aMood) {
        console.log(aMood)
        setListedMoods([...listedMoods, aMood])
    }
    
    const displayMoods = moods.map(mood => <MoodCard key={mood.id} mood={mood} handleAddRecord={handleAddRecord} /> )

    const recordedMoods = listedMoods.map(listedMood => <MoodRecord key={listedMood.id} mood={listedMood} setListedMoods={setListedMoods}/>)

    return (
        <>
            <div>
                <h1 className="title">Mood Board</h1>
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