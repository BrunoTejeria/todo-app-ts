import { sql } from "@vercel/postgres";
import { Tasks } from "./models";

export async function fetchAll() {
	try {

		const result = await sql<Tasks>`SELECT * FROM tasks`;
		return result.rows;
	}
	catch (e) {
		console.error(e);
		return null;
	}
}

export async function fetchState(id: string) {
	try {
		return await sql<Tasks>`SELECT status  FROM tasks WHERE id = ${id}`;
	}
	catch (e) {console.error(e);
		return null;
	}
}

export default async function fetchText(id: string) {
	try {
		return await sql<Tasks>`SELECT text FROM tasks WHERE id = ${id}`;
	}
	catch {
		return null;
	}
}


export async function createTask(text: string): Promise<Tasks | null> {
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

console.log(await createTask("task new"))

export async function updateTask(id: string, status: "pending" | "done") {
	try {
    const result = await sql<Tasks>`UPDATE tasks SET status = ${status} WHERE id = ${id} RETURNING *`;
    return result.rows[0];
  }
  catch (e) {
    console.error(e);
    return null;
  }
}

export async function deleteTask(id: string) {
	try {
		const result = await sql<Tasks>`DELETE FROM tasks WHERE id = ${id} RETURNING *`;
		return result.rows[0];
	}
	catch (e) {
		console.error(e);
		return null;
	}
}

