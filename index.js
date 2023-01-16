import express, { json } from "express";
import Book from "./models/BookModel.js";
import Borrow from "./models/BorrowModel.js";
import cors from "cors";
import cookieSession from "cookie-session";
import db from "./models/index.js";
import dotenv from "dotenv";
import Reader from "./models/ReaderModel.js";
import Staff from "./models/StaffModel.js";
import router from "./routes/index.js";
dotenv.config();

const app = express();

app.use(cors( {credentials: true, origin: 'http://localhost:3000' } ))
app.use(json());
app.use(cookieSession({
    name: 'session',
    keys: ["key1", "key2"]
}));
app.use(router);

db.sync()
  .then(() => {
    console.log("Drop and re-sync db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});