import {useState, useEffect} from "react";
import Switch from "@mui/material/Switch";
import {fetchState} from "../lib/data";

export default function Task({
	id,
	text,
}: {
	id: string;
	text?: string;
}): JSX.Element {
	const [state, setState] = useState({
		checkStates: undefined,
		class: "",
		checkedA: true,
		checkedB: true,
	});

	const evalTaskState = (checkedB: boolean) => {
		if (!checkedB) {
			return "line-through text-gray-400"; // <- if the task is not done
		}
		return ""; // <- if the task is done
	};

	const taskStatus = () => {
		fetchState(id).then((fetchedState) => {
			const status = fetchedState?.rows[0].status;
			console.log(status);

			if (status === "done") {
				setState((prevState) => ({
					...prevState,
					class: evalTaskState(false),
					checkedB: false,
				}));
				return "done";
			} else if (status === "pending") {
				setState((prevState) => ({
					...prevState,
					class: evalTaskState(true),
					checkedB: true,
				}));
				return "pending";
			}
		});
	};

	useEffect(() => {
		taskStatus();
	}, [id]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newCheckedB = event.target.checked;
		setState((prevState) => ({
			...prevState,
			class: evalTaskState(newCheckedB),
			checkedB: newCheckedB,
		}));
		console.log(state);
	};

	const taskText = () => {
		return text;
	};

	return (
		<div className="">
			<div className="flex">
				<div className="h-16 w-16 bg-gray-200 border-gray-300 border-solid border-2">
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
				<div className="p-2 w-10/12 border-gray-300 border-solid border-2 border-l-0">
					<h1 className={`text-center text-4xl font-bold ${state.class}`}>
						{taskText()}
					</h1>
				</div>
			</div>
		</div>
	);
}
