"use client";
import {useState, useEffect} from "react";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import dataFetcher from "../../lib/data";

export default function Task({
	id,
	text,
	status,
}: {
	id: string;
	text?: string;
	status: "pending" | "done";
}): JSX.Element {
	const evalTaskState = (checkedB: boolean) => {
		if (!checkedB) {
			return "line-through text-gray-400"; // <- if the task is not done
		}
		return ""; // <- if the task is done
	};

	const taskStatus = () => {
		if (status === "done") {
			return false;
		}
		return true;
	};

	const [state, setState] = useState({
		checkStates: undefined,
		checkedA: taskStatus(),
		checkedB: taskStatus(),
	});

	// const taskStatus = () => {
	// 	if (status === "done") {
	// 		setState((prevState) => ({
	// 			...prevState,
	// 			class: evalTaskState(false),
	// 			checkedB: false,
	// 		}));
	// 		return "done";
	// 	} else if (status === "pending") {
	// 		setState((prevState) => ({
	// 			...prevState,
	// 			class: evalTaskState(true),
	// 			checkedB: true,
	// 		}));
	// 		return "pending";
	// 	}
	// };

	useEffect(() => {
		taskStatus();
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newCheckedB = event.target.checked;
		dataFetcher.updateState(id, newCheckedB ? "pending" : "done");
		setState((prevState) => ({
			...prevState,
			checkedB: newCheckedB,
		}));
	};

	const taskText = () => {
		return text;
	};

	return (
		<div className="">
			<div className="flex w-full">
				<div className="min-h-16 min-w-16 bg-gray-200 border-gray-300 border-solid border-2">
					{
						<Switch
							className="w-full h-full mt-3"
							checked={state.checkedB}
							onChange={handleChange}
							color="primary"
							name="checkedB"
							inputProps={{"aria-label": "primary checkbox"}}
						/>
					}
				</div>
				<div className="p-2 w-full border-gray-300 border-solid border-2 border-x-0">
					<h1
						className={`text-center text-3xl font-bold ${evalTaskState(
							state.checkedB
						)}`}
					>
						{taskText()}
					</h1>
				</div>
				<div className="min-h-16 min-w-12 flex justify-center items-center border-gray-300 border-solid border-2 border-x-0">
					<Link
						href={`/edit?id=${id}`}
						className=""
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="#e5e7eb"
							className="size-8 hover:fill-blue-400"
						>
							<path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
							<path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
						</svg>
					</Link>
				</div>
				<div className="min-h-16 min-w-12 flex justify-center items-center border-gray-300 border-solid border-2 border-l-0">
					<Link href={`/edit/`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="#e5e7eb"
							className="size-8 hover:fill-red-400"
						>
							<path
								fill-rule="evenodd"
								d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
								clip-rule="evenodd"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}
