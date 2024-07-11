import { Header, Status, Task, TaskOnePropResponse, TaskResponse, TasksResponse } from "./types"

class Data {
	url: string;
	tasksUrl: string;
	headers: Header = { "Content-Type": "application/json" };

	constructor(backendUrl?: string) {
		this.url = backendUrl || "http://127.0.0.1:5064";
		this.tasksUrl = `${backendUrl}/tasks`;
	}

	public async getAllTasks(): Promise<Task[]> {
		const response = await fetch(`${this.tasksUrl}`, {
			method: "GET",
			headers: {...this.headers }
		});
		const tasks: TasksResponse = await response.json();
		return tasks.content;
	}

	public async getState(id: string): Promise<string | Number | boolean | null> {
		const response = await fetch(`${this.tasksUrl}/${id}/state`, {
      method: "GET",
      headers: {...this.headers }
    });
    const task: TaskOnePropResponse = await response.json();
		return task.content;
	}

	public async updateState(id: string, state: Status): Promise<Task | null> {
		const response = await fetch(`${this.tasksUrl}/${id}/state?status=${state}`, {
			method: "PUT",
      headers: {...this.headers }
		})
		const task: TaskResponse = await response.json();
		return task.content;
	}
}

const dataFetcher = new Data(process.env.BACKEND_URL);

export default dataFetcher;
