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
    <>
        <h2>Do them to-do's</h2>
        {description}
        {category}
        <button onClick={handleDeleteClick}>🗑️</button>
    </>
    )
}

export default ToDoCard;