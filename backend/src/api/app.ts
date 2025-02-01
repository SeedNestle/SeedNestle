import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://seednestle.vercel.app', // Allow frontend requests
  methods: ['GET', 'POST'],
  credentials: true
}));

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://admin:admin%400258@seednestledb.8odvf.mongodb.net/SeedNestleDB?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, { dbName: 'SeedNestleDB' })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
import subscriberRoutes from '../routes/subscriberRoutes';
app.use('/api', subscriberRoutes);

// Export for Vercel
export default app;
