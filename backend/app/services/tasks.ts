import { sql } from "@vercel/postgres";

import { Tasks } from "../lib/models";
import generateUUIDv4 from "../utils/uuid";


class TasksService {
  static async getAll(): Promise<Tasks[] | null> {
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
      const result = await sql<Tasks>`INSERT INTO tasks (id, text, status, createdAt) VALUES (${generateUUIDv4()}, ${text}, 'pending', NOW()) RETURNING *`;
      return result.rows[0];
    }
    catch (e) {
      console.log(e);
      return null;
    }
  }



  static async updateState(id: string, status: "pending" | "done"): Promise<Tasks | null> {
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
