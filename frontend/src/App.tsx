import {useState, useEffect} from "react";
import "./globals.css";
import {fetchAll, deleteTask} from "./lib/data";
import Task from "./ui/task";
import addTask from "./ui/addTask";

export default function App(): JSX.Element {
	const [tasks, setTasks] = useState<any[]>(["<>No hay tareas</>"]);

	useEffect(() => {
		fetchAll().then((fetchedTasks) => {
			if (fetchedTasks) {
				setTasks(fetchedTasks);
			}
		});
	}, []);

	return (
		<>
			<div>
				{tasks &&
					tasks.map((task) => (
						<Task
							key={task.id}
							id={task.id}
							text={task.text}
						/>
					))}
			</div>
		</>
	);
}
