Animal Sighting Tracker 🦓🐆
Overview 🌍
Welcome to the Animal Sighting Tracker! This web application allows users to log and track animal sightings in their area. It enables the addition of individual animals, species, and sightings, while also offering a dynamic way to manage and view records. With a clean, responsive interface, the app makes it easy for users to report sightings, ensuring that data is collected in an organized manner.

Key Features 🔑:
Add Animal Sightings 📝: Easily log new sightings with important details, including the date, location, health status, and more.

Manage Species & Individuals 🦓: Track individual animals and species, and update their information as needed.

View Sightings 👀: View a detailed list of all sightings, with the option to delete records.

Responsive Design 📱: The app is mobile-friendly, ensuring a great experience on both desktops and mobile devices.

Demo 🎥
Click here to view the demo

Table of Contents 📚
Installation

Usage

Project Structure

Technologies Used

Database Setup

Contributing

License

Installation 🚀
To run this project locally, follow the steps below:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/animal-sighting-tracker.git
Navigate to the project directory:

bash
Copy
Edit
cd animal-sighting-tracker
Install dependencies: Install the required packages with npm:

bash
Copy
Edit
npm install
Start the development server: To run the app locally, use the following command:

bash
Copy
Edit
npm start
The app should now be running on http://localhost:5000.

Usage 📋
Once the application is up and running, you can:

Add new sightings 🦒: Click on the "Add Sighting" form to input new sightings along with relevant information.

Track species and individuals 🐅: Use the forms at the bottom to add new species or individual animals.

View sightings 👁️: View the sightings in a dynamic list, with the option to delete any sighting you no longer need.

Explore the background 🌄: The site features a beautiful background image, enhancing the user experience.

Database Setup 🗄️
This project uses a PostgreSQL database to store the sightings and species information. If you want to set up the database locally, follow these steps:

Install PostgreSQL: If you haven't installed PostgreSQL, you can follow these instructions for your platform.

Create a new database: Open your terminal or command line and run the following command to create a new database:

bash
Copy
Edit
createdb animal_sightings
Restore from pg_dump: We’ve included a pg_dump file that contains a backup of the database schema and sample data. To restore the database from the dump, run:

bash
Copy
Edit
pg_restore -U yourusername -d animal_sightings path/to/pg_dump_file.dump
Replace yourusername with your PostgreSQL username and path/to/pg_dump_file.dump with the path to the pg_dump file in your project.

Configure the Backend: Make sure your backend is correctly configured to connect to the PostgreSQL database. You may need to update the database connection URL in your backend configuration (e.g., config.js or .env file) with the appropriate details.

Project Structure 🗂️
plaintext
Copy
Edit
animal-sighting-tracker/
├── client/                  # Frontend code
│   ├── public/              # Public assets (index.html, etc.)
│   └── src/                 # React components and styles
│       ├── assets/          # Static assets (e.g., background images)
│       ├── components/      # Reusable React components
│       ├── App.css          # Main CSS file
│       └── App.jsx          # Main React component
└── server/                  # Backend code (if applicable)
    ├── routes/              # API routes
    └── models/              # Database models
Technologies Used 💻
Frontend: React.js, CSS

Backend: Node.js, Express.js (Optional: If you have a backend for managing the sightings and species)

State Management: React useState and useEffect

Package Manager: npm

Database: PostgreSQL

Other Tools: Vite (for faster development), Babel (for compiling JS), Fetch API (for fetching data)

Contributing 🤝
We welcome contributions! Feel free to fork the project, submit issues, and create pull requests to improve the app. Here’s how you can contribute:

Fork the repository.

Create a new branch: git checkout -b feature-branch

Make your changes and commit them: git commit -am 'Add new feature'

Push to the branch: git push origin feature-branch

Create a pull request from your fork to this repository.


License 📄
This project is licensed under the MIT License - see the LICENSE file for details.