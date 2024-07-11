import {useState, useEffect} from "react";
import "./globals.css";

import Task from "./ui/task";
import addTask from "./ui/addTask";
import dataFetcher from "./lib/data";

await dataFetcher.getAllTasks();

export default function App(): JSX.Element {
	const [tasks, setTasks] = useState<any[]>(["<>No hay tareas</>"]);

	useEffect(() => {
		dataFetcher.getAllTasks().then((fetchedTasks) => {
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
