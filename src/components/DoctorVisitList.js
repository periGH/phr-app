import React, { useState, useEffect } from 'react';

const DoctorVisitList = () => {
  const [doctorVisits, setDoctorVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/doctorVisits`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDoctorVisits(data);
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
    <div className="doctor-visits">
      {doctorVisits.length > 0 ? (
        <ul>
          {doctorVisits.map((visit) => (
            <li key={visit._id}>
              <div>
                <strong>Date:</strong> {new Date(visit.date).toLocaleDateString()}
              </div>
              <div>
                <strong>Doctor:</strong> {visit.doctorName}
              </div>
              <div>
                <strong>Reason:</strong> {visit.reason}
              </div>
              <div>
                <strong>Notes:</strong> {visit.notes}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctor visits found.</p>
      )}
    </div>
  );
};

export default DoctorVisitList;
