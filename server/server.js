import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import db from "./db.js";
// Load env from .env file
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());


app.get('/', (req, res) => {
    res.send('Animal Sighting Tracker API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

