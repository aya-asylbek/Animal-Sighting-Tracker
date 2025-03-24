import React, { useState } from 'react';

const AddIndividualForm = () => {
  const [nickname, setNickname] = useState('');
  const [scientist, setScientist] = useState('');
  const [species, setSpecies] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make sure all fields are filled in 
    if (!nickname || !scientist || !species) {
      alert('Please fill in all fields');
      return;
    }

    // Send data to the server 
    const response = await fetch('http://localhost:5000/individuals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname, scientist, species })
    });

    if (response.ok) {
      alert('Individual added successfully!');
    } else {
      alert('Failed to add individual');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-individual-form">
      <label htmlFor="nickname">Nickname</label>
      <input
        type="text"
        id="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        required
        maxLength="50"
        placeholder="example - Prickly Petunia"
      />

      <label htmlFor="scientist">Scientist Tracking Animal</label>
      <input
        type="text"
        id="scientist"
        value={scientist}
        onChange={(e) => setScientist(e.target.value)}
        required
        maxLength="50"
        placeholder="example - Dr. John Doe"
      />

      <label htmlFor="species">Species</label>
      <input
        type="text"
        id="species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        required
        maxLength="50"
        placeholder="example - Tiger"
      />

      <button type="submit">Add Individual</button>
    </form>
  );
};

export default AddIndividualForm;
