import React, { useState } from 'react';

const AddSpeciesForm = () => {
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [conservationStatus, setConservationStatus] = useState('');
  const [estimatedPopulation, setEstimatedPopulation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // If not add  required fields ,will not work
    if (!commonName || !scientificName || !conservationStatus || !estimatedPopulation) {
      alert('Please fill in all fields');
      return;
    }

    // Send data to the server 
    const response = await fetch('http://localhost:5000/species', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        common_name: commonName,
        scientific_name: scientificName,
        conservation_status: conservationStatus,
        estimated_population: estimatedPopulation
      })
    });

    if (response.ok) {
      alert('Species added successfully!');
    } else {
      alert('Failed to add species');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-species-form">
      <label htmlFor="commonName">Common Name</label>
      <input
        type="text"
        id="commonName"
        value={commonName}
        onChange={(e) => setCommonName(e.target.value)}
        required
        maxLength="50"
        placeholder="example - Tiger"
      />

      <label htmlFor="scientificName">Scientific Name</label>
      <input
        type="text"
        id="scientificName"
        value={scientificName}
        onChange={(e) => setScientificName(e.target.value)}
        required
        maxLength="100"
        placeholder="example - Panthera tigris"
      />

      <label htmlFor="conservationStatus">Conservation Status</label>
      <input
        type="text"
        id="conservationStatus"
        value={conservationStatus}
        onChange={(e) => setConservationStatus(e.target.value)}
        required
        maxLength="10"
        placeholder="example - CR, EN, LC"
      />

      <label htmlFor="estimatedPopulation">Estimated Population in the Wild</label>
      <input
        type="number"
        id="estimatedPopulation"
        value={estimatedPopulation}
        onChange={(e) => setEstimatedPopulation(e.target.value)}
        required
        min="1"
        placeholder="example - 3000"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddSpeciesForm;
