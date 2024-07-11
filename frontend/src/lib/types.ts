export type Status = "pending" | "done";
export type SingleContent = string | number | boolean | null;
export type Content = {[key: string]: string}

// table model
export type Task = {
  id: string;
  text: string;
  status: Status;
  createdAt: Date;
}

// fetch interface

export interface TaskResponse {
  message: string;
  content: Task | null;
}

export interface TasksResponse {
  message: string;
  content: Task[];
}

export interface TaskOnePropResponse {
  message: string;
  content: SingleContent;
}



// headers
export interface Header {
  [key: string]: string;
}
