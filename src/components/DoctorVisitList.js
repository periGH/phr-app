import React, { useState, useEffect } from 'react';

const DoctorVisitList = () => {
  const [doctorVisits, setDoctorVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/doctorVisits`)
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
            <li key={visit.id}>
              {/* Render doctor visit details */}
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
