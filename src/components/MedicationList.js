
import React, { useState, useEffect } from 'react';

const MedicationList = () => {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/medications')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMedications(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className="medication-list">
      {medications.length > 0 ? (
        <ul>
          {medications.map((medication) => (
            <li key={medication._id}>
              <div>
                <strong>Name:</strong> {medication.name}
              </div>
              <div>
                <strong>Dosage:</strong> {medication.dosage}
              </div>
              <div>
                <strong>Frequency:</strong> {medication.frequency}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No medications found.</p>
      )}
    </div>
  );
  

  


};

export default MedicationList;