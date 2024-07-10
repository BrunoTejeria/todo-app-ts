import { sql } from "@vercel/postgres";
import { Tasks } from "../lib/models";


class TasksService {
  static async selectAll(): Promise<Tasks[] | null> {
    try {
      const result = await sql<Tasks>`SELECT * FROM tasks`;
      return result.rows;
    }
    catch (e) {
      console.error(e);
      return null;
    }
  }

  static async getState(id: string): Promise<Tasks | null> {
    try {
      const result = await sql<Tasks>`SELECT status FROM tasks WHERE id = ${id} LIMIT 1`;
      return result.rows[0];
    }
    catch (e) {console.error(e);
      return null;
    }
  }

  static async getText(id: string): Promise<Tasks | null> {
    try {
      const result = await sql<Tasks>`SELECT text FROM tasks WHERE id = ${id} LIMIT 1`;
      return result.rows[0];
    }
    catch {
      return null;
    }
  }


  static async createTask(text: string): Promise<Tasks | null> {
    try {
      const result = await sql<Tasks>`INSERT INTO tasks (id, text, status, createdAt) VALUES ('yab2e84e-93b7-4f5e-8e1d-5c8e7b8f6c0a', ${text}, 'pending', NOW()) RETURNING *`;
      console.log(result);
      return result.rows[0];
    }
    catch (e) {
      console.log(e);
      return null;
    }
  }



  static async updateTask(id: string, status: "pending" | "done"): Promise<Tasks | null> {
    try {
      const result = await sql<Tasks>`UPDATE tasks SET status = ${status} WHERE id = ${id} RETURNING *`;
      return result.rows[0];
    }
    catch (e) {
      console.error(e);
      return null;
    }
  }

  static async deleteTask(id: string): Promise<Tasks | null> {
    try {
      const result = await sql<Tasks>`DELETE FROM tasks WHERE id = ${id} RETURNING *`;
      return result.rows[0];
    }
    catch (e) {
      console.error(e);
      return null;
    }
  }
}

export default TasksService;
