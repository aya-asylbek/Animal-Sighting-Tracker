import { useState, useEffect } from 'react'
import AddSightingForm from './components/AddSightingForm';
import AddIndividualForm from './components/AddIndividualForm';
import AddSpeciesForm from './components/AddSpeciesForm';
import './App.css';


function App() {
  //1: Create state for storing sightings and loading status
  const [sightings, setSightings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //2: Fetch data when component mounts
  useEffect(() => {
    const fetchSightings = async () => {
      try {
        //3: Make API call to my backend
        const response = await fetch('http://localhost:5000/sightings');
        if (!response.ok) {
          throw new Error('Failed to fetch sightings');
        }
        //4: Convert response to JSON
        const data = await response.json();
        //5: Update state with fetched data
        setSightings(data);
        setIsLoading(false);
      } catch (err) {
        //6: Handle errors
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchSightings();
  }, []); 
  


  //delete function adding (will be on each card)
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

  
  
  
  
  
  
  // Empty dependency array means this runs once on mount
  //7: Render different states
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  if (isLoading) {
    return <div className="loading">Loading sightings...</div>;
  }
  return (
    <div className="app">
      <h1>Animal Sightings Tracker</h1>

      {/* Sightings section on top */}
      <div className="sightings-container">
        <div className="sightings-list">
          {sightings.map((sighting) => (
            <div key={sighting.id} className="sighting-card">
              <h2>{sighting.nickname}</h2>
              <div className="sighting-details">
                <p>Date: {new Date(sighting.sighting_time).toLocaleDateString()}</p>
                <p>Location: {sighting.location}</p>
                <p>Health Status: {sighting.healthy ? 'Healthy' : 'Needs Attention'}</p>
                <p>Reported by: {sighting.sighter_email}</p>
              </div>
              {/* addind delete button for each my card sighting */}
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

