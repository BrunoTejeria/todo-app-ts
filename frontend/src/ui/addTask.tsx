import {createTask} from "../lib/data";
import React, {useState} from "react";

const addTask = () => {
	const [text, setText] = useState("");

	const handleChange = (event) => {}
		setText(event.target.text);
	};

	const handleSend = (event) => {
		event.preventDefault();
		console.log("Valor del input:", text);
	};

	return (
		<div>
			<form onSubmit={handleSend}>
				<input
					type="text"
					value={text}
					onChange={handleChange}
					placeholder="Nueva tarea..."
				/>
				<button type="submit">Enviar</button>
			</form>
			<p>Valor actual: {text}</p>
		</div>
	);
};

export default {addTask};
