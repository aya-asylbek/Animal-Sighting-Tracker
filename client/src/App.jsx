import { useState, useEffect } from 'react';
import AddSightingForm from './components/AddSightingForm';
import AddIndividualForm from './components/AddIndividualForm';
import AddSpeciesForm from './components/AddSpeciesForm';
import backgroundImage from './assets/background.jpg';

import './App.css';

function App() {
  const [sightings, setSightings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //2: FILTER 
  const [showHealthy, setShowHealthy] = useState(false);

  //3: Fetch data 
  useEffect(() => {
    const fetchSightings = async () => {
      try {
        const response = await fetch('http://localhost:5000/sightings');
        if (!response.ok) {
          throw new Error('Failed to fetch sightings');
        }
        const data = await response.json();
        setSightings(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchSightings();
  }, []);

  // Filter healthy or no
  const filteredSightings = showHealthy
    ? sightings.filter((sighting) => sighting.healthy === true)
    : sightings;

  //delete button adding (will be on each card)
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/sightings/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete sighting');
      }

      setSightings(sightings.filter(sighting => sighting.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  if (isLoading) {
    return <div className="loading">Loading sightings...</div>;
  }

  return (
    <div className="app">
      <h1>Animal Sightings Tracker</h1>

      {/* Healthy filter checkbox */}
      <div className="filter">
        <label>
          <input
            type="checkbox"
            checked={showHealthy}
            onChange={() => setShowHealthy(!showHealthy)}
          />
          Show only healthy animals
        </label>
      </div>

      {/* Sightings section on top */}
      <div className="sightings-container">
        <div className="sightings-list">
          {filteredSightings.map((sighting) => (
            <div key={sighting.id} className="sighting-card">
              <h2>{sighting.nickname}</h2>
              <div className="sighting-details">
                <p>Date: {new Date(sighting.sighting_time).toLocaleDateString()}</p>
                <p>Location: {sighting.location}</p>
                <p>Health Status: {sighting.healthy ? 'Healthy' : 'Needs Attention'}</p>
                <p>Reported by: {sighting.sighter_email}</p>
              </div>
              <button onClick={() => handleDelete(sighting.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>

      {/* Forms section at the bottom */}
      <div className="form-container">
        <div>
          <h2>Add a new individual</h2>
          <AddIndividualForm />
        </div>

        <div>
          <h2>Add sighting</h2>
          <AddSightingForm />
        </div>

        <div>
          <h2>Add a new species</h2>
          <AddSpeciesForm />
        </div>
      </div>
    </div>
  );
}

export default App;
