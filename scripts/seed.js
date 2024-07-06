import { sql } from "@vercel/postgres";
import dotenv from "dotenv";

dotenv.config({ path: './.env.local' });

async function seed() {
  try {
    console.log("seeding database...")
    await sql`INSERT INTO Tasks (id, text, status, createdAt) VALUES
    ('1e7c73e2-78d6-4b50-b8f8-7398e0c9d5ea', 'Programming', 'pending', '2024-07-01 10:30:00'),
    ('2a17f2e4-0c5a-4e6b-87b4-92e69f2b3c4d', 'Attend team meeting', 'done', '2024-07-01 12:00:00'),
    ('3dfe9e50-15e6-4c4c-9d30-87a9e2b8d4f2', 'Review code for project', 'pending', '2024-07-02 09:00:00'),
    ('4ab9e84e-91b7-4f5e-8f1d-5c8e7b8f6c0a', 'Update documentation', 'done', '2024-07-02 14:45:00');
    `
  }

  catch (err) {
    console.log(err)
  }
}

seed()