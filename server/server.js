import express from "express";
import "dotenv/config"
import cookieParser from "cookie-parser"
import mongoose from "./config/db.js"
import authRouter from "./src/routers/authRouter.js"
const app = express();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());


app.use(authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
})

