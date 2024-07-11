import {useState, useEffect} from "react";

import Task from "./task";
import addTask from "./addTask";
import NoTasks from "./noTasks";
import dataFetcher from "../lib/data";

await dataFetcher.getAllTasks();

function TasksTable(): JSX.Element {
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
				{tasks.length > 1 ? (
					tasks.map((task) => (
						<Task
							key={task.id}
							id={task.id}
							text={task.text}
						/>
					))
				) : (
					<NoTasks />
				)}
			</div>
		</>
	);
}

export default TasksTable;
