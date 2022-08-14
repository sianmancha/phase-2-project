import react, {useEffect, useState} from "react";
import ToDoForm from "./ToDoForm";
import ToDoCard from "./ToDoCard";

function ToDoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("http://moods-and-todos.herokuapp.com/todos")
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])

    function handleAddTodos(newTodo) {
        setTodos([...todos, newTodo])
    }

    function handleDeletedItem(id) {
        const updatedToDos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedToDos)
    }

    const displayTodos = todos.map(todo => <ToDoCard key={todo.id} todo={todo} handleDeletedItem={handleDeletedItem} /> )

    return (
        <div>
            <h1 className="todoHeader">To-Do List </h1>
            <ToDoForm handleAddTodos={handleAddTodos}/>
            <h2 className="todoListHeader">Your To-Do List</h2>
            {displayTodos}
        </div>
    )
}

export default ToDoList;