import React from "react";

 function ToDoCard({todo: {id, description, category}, handleDeletedItem}) {

    function handleDeleteClick() {
        fetch(`http://localhost:6001/todos/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => handleDeletedItem(id))
    }

    return (
    <div className="todos">
        <div className="description">
        {description}
        </div>
        <div className="category">
        {category}
        {/* <button className="deleteButton" onClick={handleDeleteClick}>Delete</button> */}
        </div>
        <button className="deleteButton" onClick={handleDeleteClick}>Delete</button>
    </div>
    )
}

export default ToDoCard;