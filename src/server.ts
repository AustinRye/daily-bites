import 'dotenv/config';
import app from './app.js'

// Log the current environment
const { NODE_ENV = 'development' } = process.env;
console.log(`Running in ${NODE_ENV} mode`);

// Start the server
const { PORT = 3000, HOST = 'localhost' } = process.env;
app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});