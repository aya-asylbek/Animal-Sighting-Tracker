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

//All species
app.get('/species', async (req, res) => {
    try {
      const species = await db.any('SELECT * FROM species');
      //console.log("Species fetched successfully:", species);
      res.json(species);
    } catch (err) {
      console.error('Error fetching species:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  //Get all individuals
  app.get('/individuals', async (req, res) => {
    try {
        const individuals = await db.any('SELECT * FROM individuals');
        //console.log("Individuals fetched successfully:", individuals);
        res.json(individuals);
    } catch (err) {
        console.error('Error fetching individuals:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all sightings
app.get('/sightings', async (req, res) => {
    try {
        const sightings = await db.any('SELECT * FROM sightings');
        //console.log("Sightings fetched successfully:", sightings);
        res.json(sightings);
    } catch (err) {
        console.error('Error fetching sightings:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});








// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

