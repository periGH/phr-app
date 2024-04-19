import React, { useState, useEffect } from 'react';

const LabResults = () => {
  const [labResults, setLabResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLabResults = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/labresults');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setLabResults(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchLabResults();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className="lab-results">
      {labResults.length > 0 ? (
        <ul>
          {labResults.map((result) => (
            <li key={result._id}>
              <div>
                <strong>Date:</strong> {new Date(result.date).toLocaleDateString()}
              </div>
              <div>
                <strong>Test Type:</strong> {result.testType}
              </div>
              <div>
                <strong>Result:</strong> {result.result}
              </div>
              <div>
                <strong>Notes:</strong> {result.notes}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No lab results found.</p>
      )}
    </div>
  );
};

export default LabResults;