import "./globals.css";
import Task from "./ui/task";

export default function App(): JSX.Element {
	return (
		<>
			<div>
				<Task
					id={1}
					text="Programar en TS"
				/>
				<Task
					id={2}
					text="Jugar ark"
				/>
				<Task
					id={3}
					text="Jugar cities"
				/>
				<Task
					id={4}
					text="waka waka"
				/>
			</div>
		</>
	);
}
