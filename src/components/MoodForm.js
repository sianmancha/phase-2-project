import react from "react";

function MoodForm() {
    return (
        <div> 
            <h3>Add a Custom Mood</h3>
            <div>
            <form>
                <input type="text" placeholder="Mood Name"></input>
                <input type="text" placeholder="Emoji"></input>
                <input type="submit" value="Add Mood"></input>
            </form>
            </div>
        </div>
    )
}

export default MoodForm;