import mongoose from "mongoose";
import Todo from "../models/todo.mjs";

async function seed(req, res) {
  const TODAY = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let next = new Date();
  next.setDate(next.getDate() + 2);
  try {
    await Todo.create([
      {
        text: "something todo today",
        completed: true,
        due: TODAY,
      },
      {
        text: "something done today",
        completed: true,
        due: TODAY,
      },
      {
        text: "something todo tomorrow",
        completed: true,
        due: TODAY,
      },
      {
        text: "something todo day after tomorrow",
        completed: true,
        due: TODAY,
      },
    ]);
    res.send("success").status(200);
  } catch (err) {
    res.send(err).status(400);
  }
}

const getEntries = async (req, res) => {
  try {
    const foundEntries = await Todo.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.json(err).status(400);
  }
};
export default { seed, getEntries };
