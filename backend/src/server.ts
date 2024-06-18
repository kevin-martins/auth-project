import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8080;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI ?? 'mongodb://localhost:27017/')
  .then(() => {
    app.listen(PORT, async () => {
      console.log("Connected !");
    });
  })
  .catch(err => console.log(err.message));