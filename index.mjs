import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import db from "./db/conn.mjs";
import brainEntries from "./routes/brain.mjs";
import calendarEntries from "./routes/entry.mjs";
import todoEntries from "./routes/todo.mjs";
import cors from "cors";
import users from "./routes/user.mjs";

//
dotenv.config();
//import connection

//setup port
const PORT = process.env.PORT || 5052;

const app = express();
//
//Middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
//routes
app.get("/", (req, res) => {
  res.send(
    `  <h1>calendar api</h1><ol>endpoints:<li>brain dump</li><li>calendar</li> <li>todos-/api/todo </li><0l>`
  );
});
//
app.use("/api/braindump", brainEntries);
app.use("/api/calendar", calendarEntries);
app.use("/api/todo", todoEntries);
app.use("/api/users", users);
//
//default, catch all routes
app.get("/*", (req, res) => {
  res.redirect("/");
});

//global error handling
app.use((err, _req, resr, next) => {
  res.status(500).send("there was an issue on the server");
});

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
