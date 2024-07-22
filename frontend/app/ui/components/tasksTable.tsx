"use client";
import {useState, useEffect} from "react";

import dataFetcher from "../../lib/data";
import {TaskType} from "@/app/lib/types";

import Task from "./task";
import AddTask from "./addTask";
import NoTasks from "./noTasks";

const TasksTable = async () => {
	const [tasks, setTasks] = useState<TaskType[]>([]);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const data = await dataFetcher.getAllTasks();
				setTasks(data);
			} catch (error) {
				console.error("Error fetching tasks:", error);
			}
		};

		fetchTasks();
	}, []);
	useEffect(() => {
		const handleNewTask = () => {
			console.log(tasks);
		};
		handleNewTask();
	}, [tasks]);

	return (
		<>
			<div className="w-full md:w-1/2 m-4">
				<div className="header">
					<div className="add-task flex justify-center border-gray-300 border-solid border-2">
						<AddTask
							onChange={setTasks}
							tasks={tasks}
						/>
					</div>
				</div>
				<div className="tasks">
					{Array.isArray(tasks) ? (
						tasks.map((task) => (
							<Task
								key={task.id}
								id={task.id}
								text={task.text}
								status={task.status}
							/>
						))
					) : (
						<NoTasks />
					)}
				</div>
			</div>
		</>
	);
};

export default TasksTable;
