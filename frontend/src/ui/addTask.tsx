import dataFetcher from "../lib/data";
import {TaskType} from "../lib/types";
import {useState} from "react";

export interface AddTaskProps {
	onAddTask: (task: Promise<TaskType | null>) => void;
}

const AddTask: React.FC<AddTaskProps> = ({onAddTask}) => {
	const [text, setText] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newTask = dataFetcher.createTask(text).then((nt) => {
			return nt;
		});

		if (newTask) {
			onAddTask(newTask);
		}
		setText("");
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
			</form>
		</div>
	);
};

export default AddTask;
