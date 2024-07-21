"use client";
import {SetStateAction, Dispatch} from "react";

import {TaskType} from "@/app/lib/types";
import dataFetcher from "@lib/data";

const AddTask = async ({
	onChange,
	tasks,
}: {
	onChange: Dispatch<SetStateAction<TaskType[]>>;
	tasks: TaskType[];
}) => {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const text: string | undefined = formData.get("text")?.toString();

		if (text) {
			let data = await dataFetcher.createTask(text);
			if (data) {
				onChange([...tasks, data]);
			}
			return data;
		} else return;
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="size-full flex justify-center items-center h-16"
			>
				<input
					name="text"
					type="text"
					placeholder="Create New Task"
					className="size-full text-center text-gray-400 text-2xl bg-gray-100 placeholder:text-2xl "
				/>
			</form>
		</>
	);
};

export default AddTask;
