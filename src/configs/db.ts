import { Pool } from 'pg';

const {
    DB_NAME = 'mydb',
    DB_PORT = 5432,
    DB_HOST = 'localhost',
    DB_USER = 'postgres',
    DB_PASSWORD = 'password'
} = process.env;

const pool = new Pool({
    database: DB_NAME,
    port: DB_PORT,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD
});

pool.connect()
    .then(client => {
        console.log(`Connected to PostgreSQL database: ${DB_NAME}`);
        client.release();
    })
    .catch(err => {
        console.error(`Error connecting to PostgreSQL database: ${DB_NAME}\n`, err);
    });

export default pool;