import react, {useState} from "react";

function MoodForm() {
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        const moodData = {
            mood: name, 
            icon: icon
        }
        fetch("http://localhost:6001/moods", {
            method: "POST",
            headers: {"Content-Type": "application/json", 
        }, 
            body: JSON.stringify(moodData),
        })
        .then(res => res.json())
        .then(newMood => handleAddMood(newMood))
    }

    return (
        <div> 
            <h3>Add a Custom Mood</h3>
            <div>
            <form onSubmit={(e) => handleSubmit(e, formData)}>
                <input type="text" placeholder="Mood Name" name="mood"></input>
                <input type="text" placeholder="Emoji" name="icon"></input>
                <input type="submit" value="Add Mood"></input>
            </form>
            </div>
        </div>
    )
}

export default MoodForm;