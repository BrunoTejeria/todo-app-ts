import TasksTable from "@comp/tasksTable";
import {Suspense} from "react";
import Image from "next/image";

import dataFetcher from "./lib/data";

import {GetServerSideProps, NextPage} from "next";

export default function Page() {
	return (
		<>
			<div className="text-center w-full flex justify-center mt-16">
				<h1 className="flex flex-row  items-center justify-between">
					<span className="text-8xl font-bold">TODO&nbsp;</span>
					<span>
						<Image
							src={"/ts-logo-128.svg"}
							alt="type script logo"
							width={128}
							height={128}
						/>
					</span>
				</h1>
			</div>
			<Suspense fallback={<h2>Loading</h2>}>
				<div className="flex justify-center w-full">
					<TasksTable />
				</div>
			</Suspense>
		</>
	);
}
