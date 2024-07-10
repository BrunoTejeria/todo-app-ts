import {useState, useEffect} from "react";
import "./globals.css";
import {fetchAll, deleteTask} from "../lib/data";
import Task from "./task";
import addTask from "./addTask";

export default function App(): JSX.Element {
	const noTasksMessage = () => "<h2>No hay tareas</h2>";

	const [tasks, setTasks] = useState<any[]>([noTasksMessage]);

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
				<h1 className="text-3xl font-bold text-center">
					Tasks{" "}
					<img
						src="./assets/etc/type-script.svg"
						alt="type script logo"
					/>
				</h1>
				<div className="flex justify-center">
					<addTask />
				</div>
			</div>

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
