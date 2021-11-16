import react from "react";
import Search from "./Search"
import ToDoForm from "./ToDoForm";

function ToDoList() {
    return (
        <div>
            To-Do List
            <ToDoForm />
            <Search />
        </div>
    )
}

export default ToDoList;