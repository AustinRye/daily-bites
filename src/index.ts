import express from 'express';

const app = express();

const { NODE_ENV = 'development' } = process.env;
console.log(`Running in ${NODE_ENV} mode`);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const { PORT = 3000, HOST = 'localhost' } = process.env;
app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});