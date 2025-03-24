import React, { useState } from 'react';

const AddSightingForm = () => {
  const [formData, setFormData] = useState({
    sighting_time: '',
    individual_id: '',
    location: '',
    healthy: false,
    sighter_email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/sightings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Sighting added!');
      setFormData({
        sighting_time: '',
        individual_id: '',
        location: '',
        healthy: false,
        sighter_email: '',
      });
    } else {
      alert('Error adding sighting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sighting Time:
        <input
          type="datetime-local"
          required
          placeholder="mm/dd/yyyy, --:-- --"
          value={formData.sighting_time}
          onChange={(e) => setFormData({ ...formData, sighting_time: e.target.value })}
        />
      </label>
      <br />
      
      <label>
        Individual ID:
        <input
          type="text"
          required
          placeholder="Enter individual ID"
          value={formData.individual_id}
          onChange={(e) => setFormData({ ...formData, individual_id: e.target.value })}
        />
      </label>
      <br />

      <label>
        Location:
        <input
          type="text"
          required
          placeholder="Enter location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
      </label>
      <br />

      <label>
        Healthy:
        <input
          type="checkbox"
          checked={formData.healthy}
          onChange={(e) => setFormData({ ...formData, healthy: e.target.checked })}
        />
      </label>
      <br />

      <label>
        Email of Scientist:
        <input
          type="email"
          required
          placeholder="Enter scientist's email"
          value={formData.sighter_email}
          onChange={(e) => setFormData({ ...formData, sighter_email: e.target.value })}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddSightingForm;

// import { useState } from 'react';

// export default function AddSighting() {
//   const [formData, setFormData] = useState({
//     sighting_time: '',
//     individual_id: '',  
//     location: '',
//     healthy: false,
//     sighter_email: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/sightings', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     });

//     if (response.ok) {
//       alert('Sighting added!');
//       setFormData({
//         sighting_time: '',
//         individual_id: '',
//         location: '',
//         healthy: false,
//         sighter_email: ''
//       });
//     } else {
//       alert('Error adding sighting.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Sighting Time:
//         <input
//           type="datetime-local"
//           required
//           value={formData.sighting_time}
//           onChange={e => setFormData({...formData, sighting_time: e.target.value})}
//         />
//       </label>
//       <br />

//       <label>
//         Individual ID: 
//         <input
//           type="number"
//           required
//           value={formData.individual_id}  
//           onChange={e => setFormData({...formData, individual_id: e.target.value})}  
//         />
//       </label>
//       <br />

//       <label>
//         Location:
//         <input
//           type="text"
//           required
//           value={formData.location}
//           onChange={e => setFormData({...formData, location: e.target.value})}
//         />
//       </label>
//       <br />

//       <label>
//         Healthy:
//         <input
//           type="checkbox"
//           checked={formData.healthy}
//           onChange={e => setFormData({...formData, healthy: e.target.checked})}
//         />
//       </label>
//       <br />

//       <label>
//         Email of scientist:
//         <input
//           type="email"
//           required
//           value={formData.sighter_email}
//           onChange={e => setFormData({...formData, sighter_email: e.target.value})}
//         />
//       </label>
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
