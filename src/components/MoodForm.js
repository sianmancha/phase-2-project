import react from "react";

function MoodForm() {
    return (
        <div> 
            <h3>Add a Custom Mood</h3>
            <form>
                <input type="text" placeholder="Mood Name"></input>
                <input type="text" placeholder="Image URL"></input>
                <input type="submit" value="Add Mood"></input>
            </form>
        </div>
    )
}

export default MoodForm;