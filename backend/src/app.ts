import express from "express";
import recipesRouter from "./routes/recipes.routes.js";

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use routes
app.use("/api/recipes", recipesRouter);

export default app;
