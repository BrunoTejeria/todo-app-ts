import {useState, useEffect} from "react";

import Task from "./task";
import AddTask from "./addTask";
import NoTasks from "./noTasks";

import {TaskType} from "../lib/types";
import dataFetcher from "../lib/data";

function TasksTable(): JSX.Element {
	const [tasks, setTasks] = useState<any[]>(["<>No hay tareas</>"]);

	const updateComponent = (task: Promise<TaskType | null>) => {
		dataFetcher.getAllTasks().then((fetchedTasks) => {
			if (fetchedTasks) {
				task.then((newTask) => {
					setTasks([...fetchedTasks, newTask]);
				});
			}
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
		<div>
			<div className="w-full md:w-1/2 m-4">
				<div className="header">
					<div className="title">
						<h1>Tasks</h1>
					</div>
					<div className="add-task">
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
		</div>
	);
}

export default TasksTable;
