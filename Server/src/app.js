import express from "express";
import authRouter from "./routes/v1/auth.js";
import { sessionMiddleware } from "./config/session.js";


const app = express();


app.use(sessionMiddleware);
app.use(express.json());


app.get('/', (req,res) => {
  res.send("Server is running ,")
});

app.use('/api/auth',authRouter)


export default app;