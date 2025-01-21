import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://seednestle.vercel.app', // This allows all domains
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true
}));


// MongoDB Connection String
const MONGO_URI = 'mongodb+srv://admin:admin%400258@seednestledb.8odvf.mongodb.net/?retryWrites=true&w=majority&appName=SeedNestleDB';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
import subscriberRoutes from '../routes/subscriberRoutes';
app.use('/api', subscriberRoutes);

// Start Server
export default app;
