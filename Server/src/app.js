import express from "express";


const app = express();


app.use(express.json());


app.get('/', (req,res) => {
  res.send("Server is running ,")
});

// app.use("/api/users",userRouter)


export default app;