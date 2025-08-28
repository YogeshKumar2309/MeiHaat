import express from "express";
import authRouter from "./routes/v1/auth.js";
import { sessionMiddleware } from "./config/session.js";
import cors from "cors";

const app = express();


app.use(
  cors({
    origin: "http://localhost:5173", // frontend ka URL
    credentials: true,              // cookies/session bhejne ke liye
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(sessionMiddleware);
app.use(express.json());


app.get('/', (req,res) => {
  res.send("Server is running ,")
});

app.use('/api/auth',authRouter)


export default app;