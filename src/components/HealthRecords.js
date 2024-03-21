// HealthRecords.js
import React, { useState, useEffect } from 'react';

const HealthRecords = () => {
  // This is where you would fetch and map your health records data

  const [records, setRecords] = useState([]); // State to store the records

  useEffect(() => {
    fetch('/api/healthrecords') //fetch('http://localhost:3001/api/healthrecords')
      .then(response => response.json())
      .then(data => {
        // Use the data in your component
      });
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:3001/api/healthrecords')
  //     .then(response => response.json())
  //     .then(data => console.log(data)); // Or set state to render in your component
  // }, []);

  return (
    <div className="health-records">
      <h1>Health Records</h1>
      <p>This section will display the user's health records.</p>
      {/* This could be a list or table of health record entries */}
    </div>
  );
};

export default HealthRecords;