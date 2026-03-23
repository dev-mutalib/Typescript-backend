import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';

dotenv.config();

const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('API is running🚀...');
});

const PORT = process.env.PORT || 7000;

connectDB()
.then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error)=>{
  throw new Error(error.message)
})