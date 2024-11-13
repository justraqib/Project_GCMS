import express from 'express';           // Use ES Module syntax for imports
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import dataRoutes from './src/routes/dataRoutes.js';

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => console.error('MongoDB connection error:', error));

// Set up routes
app.use('/api', dataRoutes); // Define the base route for API

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
