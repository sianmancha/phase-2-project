import react from "react";

function ToDoForm() {

    function handleSubmit(e) {
        e.preventDefault()
        const todoData = {
            description: description, 
            category: category
        }
        
    return (
        <div>
            To Do Form
            <form>
                <input type="text" placeholder="To-Do Description"></input>
                <input type="text" placeholder="category(e.g. chores, self-care, ect.)" name="category"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default ToDoForm;

{/* <input list="categories" name="Category"></input>
                <datalist id="categories">
                    <option value="Chores"></option>
                    <option value="Self-Care"></option>
                </datalist> */}