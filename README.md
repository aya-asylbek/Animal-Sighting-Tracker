# 🦁 Animal Sighting Tracker

**React Vite PostgreSQL Express Node.js**

A full-stack PERN (PostgreSQL, Express, React, Node.js) application for tracking endangered animal species, individuals, and sightings. Built with modern web technologies and a focus on user experience.

🌍 **About Endangered Species**  
An endangered species is one that is at high risk of extinction in the near future, either globally or within a specific region. Species become endangered due to factors such as habitat destruction, poaching, climate change, and invasive species. Conservation efforts, including legal protections, habitat restoration, and captive breeding programs, aim to prevent extinction.

**Conservation Status Categories**  
The International Union for Conservation of Nature (IUCN) Red List is the most recognized system for assessing species' conservation status:

| Status                   | Description                        |
|--------------------------|------------------------------------|
| 🦣 Extinct (EX)           | No individuals remain              |
| 🌍 Extinct in the Wild (EW) | Only survive in captivity          |
| 🐅 Critically Endangered (CR) | Extremely high risk of extinction |
| 🦓 Endangered (EN)        | Very high risk of extinction       |
| 🦘 Vulnerable (VU)        | High risk of extinction            |
| 🦒 Near Threatened (NT)   | Close to becoming threatened       |
| 🦄 Least Concern (LC)     | No immediate risk                  |

Over 195 countries have committed to protecting endangered species through biodiversity action plans and conservation programs.

---

## ✨ Features

### 🦊 Species Management
- Track endangered species with detailed information
- Monitor conservation status and population data
- Scientific and common name tracking

### 🐘 Individual Tracking
- Monitor specific animals within each species
- Track individual histories and characteristics
- Link individuals to their species data

### 📸 Sighting Records
- Record and manage animal sightings
- Location tracking with flexible format
- Health status monitoring
- Image upload capabilities

---

## 🚀 Getting Started

### 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) [Download Node.js](https://nodejs.org/en/download/)
- **PostgreSQL** (v12 or higher) [Download PostgreSQL](https://www.postgresql.org/download/)
- **Vite** [Download Vite](https://vitejs.dev/)

---

### 🔄 Quick Start Guide

#### 1. Clone & Navigate

```bash
git clone <your-repo-url>
cd animal-sighting-tracker
2. Database Setup
To set up the database, you can use my PostgreSQL dump file for an easy setup.

Download the PostgreSQL dump file from the repository.

Create the database using the following command:

bash
Copy
Edit
createdb animal_sightings
Restore the database from the dump file:

bash
Copy
Edit
psql animal_sighting < server/db/db_dump.sql
3. Server Configuration
Navigate to the server folder and install dependencies:

bash
Copy
Edit
cd server
npm install
Create a .env file in the server folder with the following content:

env
Copy
Edit
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=animal_sighting

Start the server:

bash
Copy
Edit
npm start
4. Client Setup
Navigate to the client folder, install dependencies, and start the client:

bash
Copy
Edit
cd client
npm install
npm run dev
Visit http://localhost:5173 in your browser.

📁 Project Structure
plaintext
Copy
Edit
📦 animal-sighting-tracker
├── 📂 client/                # React frontend
│   ├── 📂 src/              # Source files
│   ├── 📂 public/           # Static files
│   └── 📄 package.json      # Frontend dependencies
├── 📂 server/               # Express backend
│   ├── 📂 db/              # Database scripts
│   ├── 📂 scripts/         # Utility scripts
│   └── 📄 package.json     # Backend dependencies
└── 📄 README.md            # Documentation
📊 Database Schema
The application uses PostgreSQL with three main tables to track endangered species and sightings:

Species Table
sql
Copy
Edit
CREATE TABLE species (
    id SERIAL PRIMARY KEY,
    commonName TEXT NOT NULL,
    scientificName TEXT NOT NULL,
    conservationStatus TEXT NOT NULL,
    wildPopulation INT,
    created_at TIMESTAMP DEFAULT NOW()
);
Individuals Table
sql
Copy
Edit
CREATE TABLE individuals (
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(255) NOT NULL,
    species_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (species_id) REFERENCES species(id) ON DELETE CASCADE
);
Sightings Table
sql
Copy
Edit
CREATE TABLE sightings (
    id SERIAL PRIMARY KEY,
    sighting_time TIMESTAMP NOT NULL,
    individual_id INT NOT NULL,
    location TEXT NOT NULL,
    appeared_healthy BOOLEAN NOT NULL,
    sighter_email VARCHAR(255) NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (individual_id) REFERENCES individuals(id) ON DELETE CASCADE
);
🔌 API Endpoints
Method	Endpoint	Description
GET	/api/species	Retrieve all species
POST	/api/species	Add a new species
GET	/api/individuals	Retrieve all individuals
POST	/api/individuals	Add a new individual
GET	/api/sightings	Retrieve all sightings
POST	/api/sightings	Add a new sighting
🛠️ Tech Stack
Frontend
⚛️ React

⚡ Vite

🎨 Modern CSS3

📱 Responsive Design

Backend
🟢 Node.js

⚡ Express

🐘 PostgreSQL

🔄 pg-promise

👏 Attributions
Color Palette: 🎨 Rainforest Pastels from Pastel Color Palettes

Icons:

🦁 Animal icons by Chattapat - Flaticon

📸 Add img icons by Superndre - Flaticon

✍️ Edit icons by Ranah Pixel Studio - Flaticon

🔍 Search icons by Smashicons - Flaticon

🗑️ Delete icons by Dreamcreateicons - Flaticon

🫥 No icons by pocike - Flaticon

Images: 🦁 Animal images sourced from Animalia.bio

UI Components: 📑 Tabbed form container inspired by Rafaela Lucas's CodePen

🧪 Testing
Frontend Tests
bash
Copy
Edit
cd client && npm test
Backend Tests
bash
Copy
Edit
cd server && npm test
🤝 Contributing
🔱 Fork the repository

🌿 Create your feature branch (git checkout -b feature/AmazingFeature)

💾 Commit your changes (git commit -m 'Add some AmazingFeature')

📤 Push to the branch (git push origin feature/AmazingFeature)

🎯 Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.