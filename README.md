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

---![Sighting](https://github.com/user-attachments/assets/3b335b86-7299-4f72-bef9-7c9976cf69b8)
![forms](https://github.com/user-attachments/assets/bff7373e-bc1e-4ad3-a458-e0469a73c9f0)


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

createdb animal_sightings

Restore the database from the dump file:

psql animal_sighting < server/db/db_dump.sql
3. Server Configuration
Navigate to the server folder and install dependencies:


cd server
npm install
Create a .env file in the server folder with the following content:

env

DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=animal_sighting

Start the server:

npm start
4. Client Setup
Navigate to the client folder, install dependencies, and start the client:

cd client

npm install

npm run dev
Visit http://localhost:5173 in your browser.

📁 Project Structure

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

🎨 Modern CSS

📱 Responsive Design

Backend
🟢 Node.js

⚡ Express

🐘 PostgreSQL

🔄 pg-promise



🧪 Testing
Frontend Tests

cd client && npm test
Backend Tests

cd server && npm test
🤝 Contributing
🔱 Fork the repository

🌿 Create your feature branch (git checkout -b feature/AmazingFeature)

💾 Commit your changes (git commit -m 'Add some AmazingFeature')

📤 Push to the branch (git push origin feature/AmazingFeature)

🎯 Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
