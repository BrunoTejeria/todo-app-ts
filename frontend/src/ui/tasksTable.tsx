import {useState, useEffect} from "react";

import Task from "./task";
import AddTask from "./addTask";
import NoTasks from "./noTasks";

import {TaskType} from "../lib/types";
import dataFetcher from "../lib/data";

function TasksTable(): JSX.Element {
	const [tasks, setTasks] = useState<any[]>(["<>No hay tareas</>"]);

	const updateComponent = (task: Promise<TaskType | null>) => {
		task.then(() => {
			dataFetcher.getAllTasks().then((fetchedTasks) => {
				if (fetchedTasks) {
					setTasks(fetchedTasks);
				}
			});
		});
	};

	useEffect(() => {
		dataFetcher.getAllTasks().then((fetchedTasks) => {
			if (fetchedTasks) {
				setTasks(fetchedTasks);
			}
		});
	}, []);

	return (
		<>
			<div className="w-full md:w-1/2 m-4">
				<div className="header">
					<div className="add-task flex justify-center border-gray-300 border-solid border-2">
						<AddTask onAddTask={updateComponent} />
					</div>
				</div>
				<div className="tasks">
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
			</div>
		</>
	);
}

export default TasksTable;
