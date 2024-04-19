
import React, { useState } from 'react';

const MedicationForm = ({ onSaveMedication }) => {
  const [medication, setMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    // Add other medication fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedication({ ...medication, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveMedication(medication);
    setMedication({
      name: '',
      dosage: '',
      frequency: '',
    });
  };

  return (
    <form className="medication-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={medication.name}
        onChange={handleChange}
        placeholder="Medication Name"
      />
      <input
        type="text"
        name="dosage"
        value={medication.dosage}
        onChange={handleChange}
        placeholder="Dosage"
      />
      <input
        type="text"
        name="frequency"
        value={medication.frequency}
        onChange={handleChange}
        placeholder="Frequency"
      />
      {/* Add other input fields */}
      <button type="submit">Add Medication</button>
    </form>
  );
};

export default MedicationForm;
