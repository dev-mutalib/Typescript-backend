import mongoose from 'mongoose';
import type { Mongoose } from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined in the environment variables');
    }
    const conn: any = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected Successfully`)
    console.log(`MongoDB host : ${conn.connection.host}`)
  } catch (error) {
     console.log('MongoDB connection failed', error)
     process.exit(1)
  }
};

export default connectDB