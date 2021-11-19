import react, {useState} from "react";

function MoodForm({handleAddMood}) {
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        const moodData = {
            name: name, 
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

        setName("")
        setIcon("")
    }

    return (
        <div className="wholeForm"> 
            <h3 className="moodFormHeader">Can't find the mood you're looking for? Add your own!</h3>
            <div>
            <form className="moodForm" onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text" 
                    placeholder="Mood Name" 
                    name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
                <input 
                    type="text" 
                    placeholder="Emoji" 
                    name="icon" 
                    value={icon} 
                    onChange={(e) => setIcon(e.target.value)}
                >
                </input>
                <input className="addMoodSubmit" type="submit" value="Add Mood"></input>
            </form>
            </div>
        </div>
    )
}

export default MoodForm;