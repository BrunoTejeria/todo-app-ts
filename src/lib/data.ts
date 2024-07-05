import { sql } from "@vercel/postgres";
import { Tasks } from "./models";

export async function fetchState(id: string) {
	try {
		return await sql<Tasks>`SELECT FIRST 1 FROM tasks WHERE id = ${id} `;
	}
	catch (e) {console.error(e);
		return null;
	}
}

export async function fetchAll(id?: string, text?: string, status?: string) {
	try {
		return await sql<Tasks>`SELECT * FROM tasks WHERE
		id = ${id} OR
		text = ${text} OR
		status = ${status}
		`
	}
	catch (e) {
		console.error(e);
		return null;
	}
}

