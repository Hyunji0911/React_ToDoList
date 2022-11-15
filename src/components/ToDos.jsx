import React from "react";
// import TaskAltIcon from '@mui/icons-material/TaskAlt';


function ToDos(props) {

    function handleClick() {
        props.onDelete(props.id)
    }

    return <div className="toDos">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
            {/* <TaskAltIcon /> */}
            ✔
        </button>
    </div>
}

export default ToDos;