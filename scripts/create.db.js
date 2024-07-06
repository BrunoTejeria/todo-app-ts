import { sql } from "@vercel/postgres";
import dotenv from "dotenv";

dotenv.config({ path: './.env.local' });

async function createDB() {
  try {
    console.log("creating database...")
    await sql`CREATE TABLE Tasks (
        id CHAR(36) PRIMARY KEY,
        text TEXT NOT NULL,
        status VARCHAR(10) NOT NULL CHECK (status IN ('pending', 'done')),
        createdAt TIMESTAMP NOT NULL
    );
    
  `
  }
  catch (e) {
    console.log("can't create database.")
    console.error(e)
  }
}

createDB();