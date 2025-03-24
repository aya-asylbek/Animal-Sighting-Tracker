import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import db from "./db.js";
// Load data  from my .env file
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
    const { common_name, scientific_name, conservation_status } = req.body;
    
    if (!common_name || !scientific_name || !conservation_status) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await db.none(
            'INSERT INTO species(common_name, scientific_name, conservation_status) VALUES($1, $2, $3)',
            [common_name, scientific_name, conservation_status]
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
    const { nickname, species_id, scientist } = req.body;

    if (!nickname || !species_id || !scientist) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await db.none(
            'INSERT INTO individuals(nickname, species_id, scientist) VALUES($1, $2, $3)',
            [nickname, species_id, scientist]
        );
        res.status(201).json({ message: 'Individual added successfully' });
    } catch (err) {
        console.error('Error adding individual:', err);
        res.status(500).json({ message: 'Error adding individual', error: err.message });
    }
});


// Get all sightings + adding nickname from individuals with join query
app.get('/sightings', async (req, res) => {
    try {
        const sightings = await db.any(`
            SELECT s.*, i.nickname 
            FROM sightings s
            JOIN individuals i ON s.individual_id = i.id
        `);
        res.json(sightings);
    } catch (err) {
        console.error('Error fetching sightings:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST route to create a new sighting
app.post('/sightings', async (req, res) => {
    const { sighting_time, individual_id, location, healthy, sighter_email } = req.body;
 // ✅ Add required field validation and check
 if (!sighting_time || !individual_id || !location || !sighter_email) {
    return res.status(400).json({ error: 'Missing required fields' });
}

// ✅ Add email format validation , ifno by format then error 
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sighter_email)) {
    return res.status(400).json({ error: 'Invalid email format' });
}
    try {
        await db.none(
            'INSERT INTO sightings(sighting_time, individual_id, location, healthy, sighter_email) VALUES($1, $2, $3, $4, $5)',
            [sighting_time, individual_id, location, healthy, sighter_email]
        );
        res.status(201).json({ message: 'Sighting added successfully' });
    } catch (err) {
        console.error('Error adding sighting:', err);
        res.status(500).json({ message: 'Error adding sighting', error: err.message });
    }
});



// DELETE /sightings/:id - Delete a sighting by its ID
app.delete('/sightings/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.result('DELETE FROM sightings WHERE id = $1', [id]);
        
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Sighting not found' });
        }
        
        res.json({ message: 'Sighting deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


// Start my  server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

