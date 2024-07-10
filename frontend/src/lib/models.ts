// db models
export type Tasks = {
  id: string;
  text: string;
  status: "pending" | "done";
  createdAt: Date;
}