import Switch from "@mui/material/Switch";
import {Skeleton} from "@mui/material";
import "@styles/skeleton.css";

export function AddTaskSkeleton() {
	return (
		<>
			<div className="size-full flex justify-center items-center h-16 rounded-full">
				<div className="size-full text-center text-gray-400 text-2xl bg-gray-100 placeholder:text-2xl skeleton" />
			</div>
		</>
	);
}

export function TaskSkeleton() {
	return (
		<div className="">
			<div className="flex w-full skeleton">
				<div
					className={`min-h-16 min-w-16 bg-gray-100 border-gray-200 border-solid border skeleton`}
				>
					{<div className="w-full h-full"></div>}
				</div>
				<div className="p-2 w-full border-gray-200 border-solid border border-x-0"></div>
			</div>
		</div>
	);
}

export function NoTasksSkeleton() {
	return <></>;
}

export function TaskTableSkeleton() {
	return (
		<>
			<div className="w-full md:w-1/2 m-4 border-transparent rounded-2xl">
				<div className="header">
					<div className="add-task flex justify-center border-gray-200 border-solid border-2">
						<AddTaskSkeleton />
					</div>
				</div>
				<div className="tasks">
					<TaskSkeleton />
					<TaskSkeleton />
					<TaskSkeleton />
					<TaskSkeleton />
					<TaskSkeleton />
				</div>
			</div>
		</>
	);
}
