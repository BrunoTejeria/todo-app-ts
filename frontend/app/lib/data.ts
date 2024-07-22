import { Header, Status, TaskType, TaskOnePropResponse, TaskResponse, TasksResponse } from "./types"

class Data {
	url: string;
	tasksUrl: string;
	headers: Header = { "Content-Type": "application/json" };
	headersNoCache: Header = {...this.headers, "Cache-Control": "no-store" };
	revalidate: number = 0; // seconds

	constructor(backendUrl?: string) {
		this.url = backendUrl || "http://127.0.0.1:5064";
		this.tasksUrl = `${this.url}/tasks`;
		this.revalidate = 0; // seconds
	}

	public async getAllTasks(): Promise<TaskType[]> {
		const response = await fetch(`${this.tasksUrl}`, {
			method: "GET",
			headers: { "Cache-Control": "no-store" },
			next: {
				revalidate: this.revalidate,
		},
		});
		const tasks: TasksResponse = await response.json();
		console.log(tasks, this.tasksUrl);
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

	public async updateState(id: string, state: Status): Promise<TaskType | null> {
		const response = await fetch(`${this.tasksUrl}/${id}/state?status=${state}`, {
			method: "PUT",
      headers: {...this.headers }
		})
		const task: TaskResponse = await response.json();
		return task.content;
	}

	public async createTask(text: string): Promise<TaskType | null> {
		const response = await fetch(`${this.tasksUrl}/create?text=${text}`, {
      method: "POST",
      headers: {...this.headers },
    });
    const task: TaskResponse = await response.json();
		console.log(task)
    return task.content;
	}

	public async deleteTask(id: string): Promise<TaskType | null> {
		const response = await fetch(`${this.tasksUrl}/${id}/delete`, {
      method: "DELETE",
      headers: {...this.headers }
    });
    const task: TaskResponse = await response.json();
    return task.content;
	}
}

const dataFetcher = new Data(process.env.BACKEND_URL);

export default dataFetcher;
