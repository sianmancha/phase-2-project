import React from "react";

 function ToDoCard({todo: {id, description, category}}) {
    return (
    <>
        <h2>Do them to-do's</h2>
        {description}
        {category}
    </>
    )
}

export default ToDoCard;