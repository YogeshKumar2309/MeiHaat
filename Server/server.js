
import dotenv from 'dotenv';
import app from './src/app.js';
import { connectDB } from './src/config/database.js';
// import {connectDB} from './config/db.js';




dotenv.config();

const PORT = process.env.PORT || 3000;



app.listen(PORT , () => {
 console.log(`Server running at \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
  connectDB();
}) 