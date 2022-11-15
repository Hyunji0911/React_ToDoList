import React, { useState } from "react";


function CreateArea(props) {

    const [todo, setTodo] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setTodo(prevToDo => {
            return {
                ...prevToDo,
                [name]: value
            }
        })        
    }

    function submitTodo(event) {
        props.onAdd(todo);
        setTodo({ title: "",
        content: ""})
        event.preventDefault();
    }


    return <div>
       <form className="create-todo">
        <input name="title" onChange={handleChange} value={todo.title} placeholder="Title"></input>
        <textarea name="content" onChange={handleChange} value={todo.content} placeholder="Write To-Do Here..." rows="3"></textarea>
        <button onClick={submitTodo}>+</button>
       </form>
    </div>
}

export default CreateArea;