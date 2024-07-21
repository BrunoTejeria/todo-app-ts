export type Status = "pending" | "done";
export type SingleContent = string | number | boolean | null;
export type Content = {[key: string]: string}

// table model
export type TaskType = {
  id: string;
  text: string;
  status: Status;
  createdAt: Date;
}

// fetch interface

export interface TaskResponse {
  message: string;
  content: TaskType | null;
}

export interface TasksResponse {
  message: string;
  content: TaskType[];
}

export interface TaskOnePropResponse {
  message: string;
  content: SingleContent;
}

// headers
export interface Header {
  [key: string]: string;
}


// Components
export interface AddTaskProps {
	onAddTask: Promise<TaskType | null>;
}