import express, { Router } from "express";
import dotenv from "dotenv";
import fs from "fs";
import cors from "cors";

// middlewares and routers imports
import logRequest from "./middlewares/logRequest";
import TasksRouter from "./routers/tasks" ;

dotenv.config({path: ".env"});
if (fs.statSync(".env.local").isFile()) {
  dotenv.config({path: ".env.local"});
}

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5064;

const app = express();

// middlewares
app.use(cors());
app.use(logRequest);


// routers
app.use("/tasks", TasksRouter);

app.listen(PORT, () => {
  console.log(`App running on: http://127.0.0.1:${PORT}`);
});