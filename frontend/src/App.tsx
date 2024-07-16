import "./globals.css";

import TasksTable from "./ui/tasksTable";

function App(): JSX.Element {
	return (
		<>
			<div className="text-center w-full flex justify-center mt-16">
				<h1 className="flex flex-row  items-center justify-between">
					<span className="text-8xl font-bold">TODO TS&nbsp;</span>
					<span>
						<img
							className=""
							src="src/assets/etc/ts-logo-128.svg"
							alt="type script logo"
						/>
					</span>
				</h1>
			</div>
			<div className="flex justify-center w-full">
				<TasksTable />
			</div>
		</>
	);
}

export default App;
