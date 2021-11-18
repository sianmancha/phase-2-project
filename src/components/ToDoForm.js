import react, {useState}from "react";

function ToDoForm({handleAddTodos}) {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        const toDoData = {
            description: description, 
            category: category
        }
        fetch("http://localhost:6001/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json", 
        }, 
            body: JSON.stringify(toDoData),
        })
        .then(res => res.json())
        .then(newTodo => handleAddTodos(newTodo))

        setDescription("")
        setCategory("")
    }

    return (
        <div>
            To Do Form
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="To-Do Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <input type="text" placeholder="category(e.g. chores, self-care, ect.)" name="category" value={category} onChange={(e) => setCategory(e.target.value)}></input>
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