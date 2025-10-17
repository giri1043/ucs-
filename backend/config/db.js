import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Using environment variables for database connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ucs_modular";

const connectDB = async () => {
  try {
    // Add connection options to increase timeout and handle buffering
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
      socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
      maxPoolSize: 10, // Increase connection pool size
      minPoolSize: 2, // Maintain minimum connections
      maxIdleTimeMS: 60000 // Close idle connections after 60 seconds
    });
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    // Don't exit the process, allow the application to continue with limited functionality
    return false;
  }
};

export default connectDB;