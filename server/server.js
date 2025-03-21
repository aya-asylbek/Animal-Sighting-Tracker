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

// POST route to create a new species
app.post('/species', async (req, res) => {
    const { common_name, scientific_name, population_estimate, conservation_status } = req.body;

    try {
        // Inserting  the new species into the database
        await db.none(
            'INSERT INTO species(common_name, scientific_name, population_estimate, conservation_status) VALUES($1, $2, $3, $4)',
            [common_name, scientific_name, population_estimate, conservation_status]
        );

        res.status(201).json({ message: 'Species added successfully' });
    } catch (err) {
        console.error('Error adding species:', err);
        res.status(500).json({ message: 'Error adding species', error: err.message });
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


// POST route to create a new individual
app.post('/individuals', async (req, res) => {
    const { nickname, species_id } = req.body;

    try {
        // Insert the new individual into the database
        await db.none(
            'INSERT INTO individuals(nickname, species_id) VALUES($1, $2)',
            [nickname, species_id]
        );

        res.status(201).json({ message: 'Individual added successfully' });
    } catch (err) {
        console.error('Error adding individual:', err);
        res.status(500).json({ message: 'Error adding individual', error: err.message });
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

// POST route to create a new sighting
app.post('/sightings', async (req, res) => {
    const { sighting_date, individual_id, location, healthy, sighter_email } = req.body;

    try {
        // Insert the new sighting into the database
        await db.none(
            'INSERT INTO sightings(sighting_date, individual_id, location, healthy, sighter_email) VALUES($1, $2, $3, $4, $5)',
            [sighting_date, individual_id, location, healthy, sighter_email]
        );

        res.status(201).json({ message: 'Sighting added successfully' });
    } catch (err) {
        console.error('Error adding sighting:', err);
        res.status(500).json({ message: 'Error adding sighting', error: err.message });
    }
});











// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

