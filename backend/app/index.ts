import express from "express";
import dotenv from "dotenv";
import fs from "fs";

import logRequest from "./middlewares/logRequest";

dotenv.config({path: ".env"});
if (fs.statSync(".env.local").isFile()) {
  dotenv.config({path: ".env.local"});
}

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5064;

const app = express();



app.use(logRequest);

app.get("/", (req, res) => {
  res.json({
    message: "Api test"
  });
})


app.listen(PORT, () => {
  console.log(`App running on: http://127.0.0.1:${PORT}`);
});