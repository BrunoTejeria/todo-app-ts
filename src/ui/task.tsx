import React from "react";
import Switch from "@mui/material/Switch";
import {fetchState} from "../lib/data";
export default function Task({
	id,
	text,
}: {
	id: Number;
	text?: string;
}): JSX.Element {
	const [state, setState] = React.useState({
		checkStates: undefined,
		checkedA: true,
		checkedB: true,
	}); // Get default state from database

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({...state, [event.target.name]: event.target.checked});
	};

	const taskText = () => {
		// let text = fetchText(id); #TODO: create function fetchText(id);
		return text; // Get task text from database
	};

	const evalTaskState = () => {
		if (state.checkedA && state.checkedB) {
			return "";
		} else {
			return "line-through text-gray-400";
		}
	};
	return (
		<div className="">
			<div className="flex">
				<div className="h-16 w-16 bg-gray-200 border-gray-300 border-solid border-2">
					<Switch
						className="w-full h-full mt-3"
						checked={state.checkedB}
						onChange={handleChange}
						color="primary"
						name="checkedB"
						inputProps={{"aria-label": "primary checkbox"}}
					/>
				</div>
				<div className="p-2 w-10/12 border-gray-300 border-solid border-2 border-l-0">
					<h1 className={`text-center text-4xl font-bold ${evalTaskState()}`}>
						{taskText()}
					</h1>
				</div>
			</div>
		</div>
	);
}
