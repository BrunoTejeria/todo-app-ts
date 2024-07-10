import { sql } from "@vercel/postgres";
import dotenv from "dotenv";

dotenv.config({ path: './.env.local' });



createDB();