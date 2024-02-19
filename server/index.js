import mongoose from "mongoose";
import Express from "express";
import "dotenv/config";
import cors from "cors";
import createController from "./controllers/createController.js";
// import Contact from "./models/Contact.js";

const app = Express();
app.use(Express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  dbName: "contact_management",
});

app.post("/create", createController);

app.listen(3001, () => {
  console.log("server is running");
});
