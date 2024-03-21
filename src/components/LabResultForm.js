import React, { useState } from 'react';

const LabResultForm = ({ onSaveLabResult }) => {
  const [labResult, setLabResult] = useState({
    date: '',
    testType: '',
    result: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLabResult({ ...labResult, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveLabResult(labResult);
    // Clear form or provide feedback
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={labResult.date}
        onChange={handleChange}
        placeholder="Test Date"
      />
      <input
        type="text"
        name="testType"
        value={labResult.testType}
        onChange={handleChange}
        placeholder="Test Type"
      />
      <input
        type="text"
        name="result"
        value={labResult.result}
        onChange={handleChange}
        placeholder="Result"
      />
      <textarea
        name="notes"
        value={labResult.notes}
        onChange={handleChange}
        placeholder="Notes"
      />
      <button type="submit">Add Lab Result</button>
    </form>
  );
};

export default LabResultForm;
