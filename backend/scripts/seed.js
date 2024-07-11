const { sql } = require('@vercel/postgres');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.local' });

async function tableExists(tableName) {
  try {
    const result = await sql`
          SELECT table_name
          FROM information_schema.tables
          WHERE table_schema = 'public' AND table_name = ${tableName}
          LIMIT 1;
      `;
    if (result.rowCount > 0) {
      return true;
    }
    return null;
  } catch (error) {
    console.error('Error executing consult:', error);
    return null;
  }
}

async function createTable() {
  try {
    console.log("creating table...")
    await sql`CREATE TABLE tasks (
        id CHAR(36) PRIMARY KEY,
        text TEXT NOT NULL,
        status VARCHAR(10) NOT NULL CHECK (status IN ('pending', 'done')),
        createdAt TIMESTAMP NOT NULL
    );
  `
  }
  catch (e) {
    console.log("can't create table.")
    console.error(e)
    process.exit(1);
  }
}

const seed = async () => {
  await sql`INSERT INTO tasks (id, text, status, createdAt) VALUES
      ('1e7c73e2-78d6-4b50-b8f8-7398e0c9d5ea', 'Programming', 'pending', '2024-07-01 10:30:00'),
      ('2a17f2e4-0c5a-4e6b-87b4-92e69f2b3c4d', 'Attend team meeting', 'done', '2024-07-01 12:00:00'),
      ('3dfe9e50-15e6-4c4c-9d30-87a9e2b8d4f2', 'Review code for project', 'pending', '2024-07-02 09:00:00'),
      ('4ab9e84e-91b7-4f5e-8f1d-5c8e7b8f6c0a', 'Update documentation', 'done', '2024-07-02 14:45:00');`
}

async function main() {
  try {
    console.log(await tableExists('tasks'))
    if (!await tableExists('tasks')) {
      console.log("Table 'tasks' does not exist. Creating table...");
      await createTable();
    }
    console.log("seeding database...")
    await seed()
    return {
      message: "Seeding completed successfully",
      error: null
    };
  }

  catch (err) {
    console.log(err)
    return {
      message: "Error seeding database",
      error: err
    }
  }
}

main()