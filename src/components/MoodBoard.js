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

    useEffect(() => {
        fetch("http://localhost:6001/recordedMoods")
        .then(res => res.json())
        .then(data => setMoodRecords(data))
    }, [])

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
                <h3 className="displayMoodsHeader">How are you feeling today?</h3>
                <div className="flex-box">
                    {/* <h3>How are you feeling today?</h3> */}
                    {displayMoods}
                </div>
                <MoodForm handleAddMood= {handleAddMood}/>
            </div>
            <h3 className="recordedMoodsHeader">Your Moods</h3>
            <div className="recordedMoods">
                {recordedMoods}
                
            </div>
            
        </>
    )
}

export default MoodBoard;