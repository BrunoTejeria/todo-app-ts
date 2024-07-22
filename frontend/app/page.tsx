import TasksTable from "@comp/tasksTable";
import {Suspense} from "react";
import {TaskTableSkeleton} from "./ui/components/skeletons";

export default function Page() {
	return (
		<>
			<div className="flex justify-center w-full">
				<Suspense fallback={<TaskTableSkeleton />}>
					<TasksTable />
				</Suspense>
			</div>
		</>
	);
}
