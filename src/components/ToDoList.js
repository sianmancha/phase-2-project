import react, {useEffect, useState} from "react";
import Search from "./Search"
import ToDoForm from "./ToDoForm";
import ToDoCard from "./ToDoCard";

function ToDoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("http://localhost:6001/todos")
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])

    function handleAddTodos(newTodo) {
        setTodos([...todos, newTodo])
    }

    const displayTodos = todos.map(todo => <ToDoCard key={todo.id} todo={todo} /> )

    return (
        <div>
            To-Do List
            <ToDoForm handleAddTodos={handleAddTodos}/>
            <Search />
            {displayTodos}
        </div>
    )
}

export default ToDoList;