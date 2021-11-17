import react from "react";

function ToDoForm() {
    return (
        <div>
            To Do Form
            <form>
                <input type="text" placeholder="To-Do Description"></input>
                <input list="categories" name="Category"></input>
                <datalist id="categories">
                    <option value="Chores"></option>
                    <option value="Self-Care"></option>
                </datalist>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default ToDoForm;