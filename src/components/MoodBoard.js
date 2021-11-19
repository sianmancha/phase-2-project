import React, {useEffect, useState } from "react";
import MoodForm from "./MoodForm";
import MoodCard from "./MoodCard";
import MoodRecord from "./MoodRecord"

function MoodBoard () {
    const [moods, setMoods] = useState([]);
    const [moodRecords, setMoodRecords] = useState([])

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
        setMoodRecords([...moodRecords, aMood])
    }
    
    const displayMoods = moods.map(mood => <MoodCard key={mood.id} mood={mood} handleAddRecord={handleAddRecord} /> )

    const recordedMoods = moodRecords.map(listedMood => <MoodRecord key={listedMood.id} mood={listedMood} setMoodRecords={setMoodRecords}/>)

    return (
        <>
            <div>
                <h1 className="title">Mood Board</h1>
                <MoodForm handleAddMood= {handleAddMood}/>
                <div className="flex-box">
                    {displayMoods}
                </div>
            </div>
            <div>
                {recordedMoods}
            </div>
            
        </>
    )
}

export default MoodBoard;