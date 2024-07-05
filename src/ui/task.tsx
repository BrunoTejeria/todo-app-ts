import React from "react";
import Switch from "@mui/material/Switch";

export default function Task(): JSX.Element {
	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({...state, [event.target.name]: event.target.checked});
	};

	const taskText = "This is a task";

	return (
		<div className="">
			<div className="flex border border-gray-500 w-72">
				<div className="h-12 w-16 bg-gray-200">
					<Switch
						className="w-full h-full"
						checked={state.checkedB}
						onChange={handleChange}
						color="primary"
						name="checkedB"
						inputProps={{"aria-label": "primary checkbox"}}
					/>
				</div>
				<div className=" w-10/12">
					<h1 className="text-4xl font-bold">{taskText}</h1>
				</div>
			</div>
		</div>
	);
}
