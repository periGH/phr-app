import React, { useState } from 'react';

const DoctorVisitForm = ({ onSaveDoctorVisit }) => {
  const [doctorVisit, setDoctorVisit] = useState({
    date: '',
    doctorName: '',
    reason: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorVisit({ ...doctorVisit, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveDoctorVisit(doctorVisit);
    // Clear the form or navigate away
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={doctorVisit.date}
        onChange={handleChange}
        placeholder="Visit Date"
      />
      <input
        type="text"
        name="doctorName"
        value={doctorVisit.doctorName}
        onChange={handleChange}
        placeholder="Doctor's Name"
      />
      <textarea
        name="reason"
        value={doctorVisit.reason}
        onChange={handleChange}
        placeholder="Reason for Visit"
      />
      <textarea
        name="notes"
        value={doctorVisit.notes}
        onChange={handleChange}
        placeholder="Notes"
      />
      <button type="submit">Add Doctor Visit</button>
    </form>
  );
};

export default DoctorVisitForm;
