import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import database connection
import connectDB from './config/db.js';

// Import routes
import contactRoutes from './routes/contactRoutes.js';

// Connect to MongoDB using the configured connection
// The connection will fall back to local MongoDB if Atlas connection fails
connectDB().then(connected => {
  if (connected) {
    console.log('✅ Database connection established successfully');
  } else {
    console.log('⚠️ Running with limited database functionality');
  }
});

// Mount routes
app.use('/api/contacts', contactRoutes);

// For backward compatibility with old API endpoint
app.post("/api/send-email", (req, res) => {
  // Redirect to new endpoint
  req.url = '/api/contacts';
  app.handle(req, res);
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  // Any route that is not api will be redirected to index.html
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
  });
}

// Define port
const PORT = process.env.PORT || 5000;
const SERVER_URL = process.env.API_URL || `http://localhost:${PORT}`;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on ${SERVER_URL}`);
});