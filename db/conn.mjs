import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//global confic
const mongoURI = process.env.ATLAS_URI;
const db = mongoose.connection;
//connection
mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log(`connected to mongo`);
});
export default db;
