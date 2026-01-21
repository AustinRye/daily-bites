import express from 'express';
import dotenv from 'dotenv';
import recipesRouter from './routes/recipes.routes.ts';

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Log the current environment
const { NODE_ENV = 'development' } = process.env;
console.log(`Running in ${NODE_ENV} mode`);

// Middleware to parse JSON requests
app.use(express.json());

// Use routes
app.use("/api/recipes", recipesRouter)

// Start the server
const { PORT = 3000, HOST = 'localhost' } = process.env;
app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});