import express from "express";
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import userRouter from "./routes/auth.router.js";
import { sessionMiddleware } from "./config/session.js";


dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(sessionMiddleware)
app.use(express.json());


app.get('/', (req,res) => {
  res.send("Server is running ,")
});

app.use("/api/users",userRouter)




app.listen(PORT , () => {
 console.log(`Server running at \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
  connectDB();
}) 