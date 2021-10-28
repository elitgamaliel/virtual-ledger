import express, { Request, Response } from "express";
import db from "./config/database.config";
import userRouter from "./route/user-route";
import transactionTypeRouter from "./route/transaction-type-route";

db.sync().then(() => {
  console.log("Connected succesfully to the database.");
});

const app = express();
const port = 9000;

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/trans-type", transactionTypeRouter);

app.listen(port, () => {
  console.log("API is running on port " + port);
});
