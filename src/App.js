import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ToDos from "./components/ToDos";
import CreateArea from "./components/CreateArea";

function App() {
	const [todos, setTodos] = useState([]);

	function addTodo(newTodo) {
		setTodos((prevTodos) => {
			return [...prevTodos, newTodo];
		});
	}

	function deleteTodo(id) {
		setTodos((prevTodos) => {
			return prevTodos.filter((toDoItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={addTodo} />
			{todos.map((toDoItem, index) => (
				<ToDos
					key={index}
					id={index}
					title={toDoItem.title}
					content={toDoItem.content}
					onDelete={deleteTodo}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
