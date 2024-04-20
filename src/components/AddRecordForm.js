import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import MedicationForm from './MedicationForm';
import DoctorVisitForm from './DoctorVisitForm';
import LabResultForm from './LabResultForm';
import './AddRecordForm.css';

const AddRecordForm = () => {
  const [recordType, setRecordType] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleRecordTypeChange = (e) => {
    setRecordType(e.target.value);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setRecordType('');
  };


  const handleMedicationSave = (medicationData) => {
    //const API_URL = process.env.REACT_APP_API_URL; // e.g., 'http://localhost:3001'
  
    const API_URL = 'http://localhost:3001'

    // console.log('Sending medication data to:', `${API_URL}/api/medications`, 'Data:', JSON.stringify(medicationData));
    // console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
  
    // Make a POST request to API endpoint
    fetch(`${API_URL}/api/medications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medicationData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  

  const handleDoctorVisitSave = (doctorVisitData) => {
    const API_URL = 'http://localhost:3001'
    // const API_URL = process.env.REACT_APP_API_URL; //production

    fetch(`${API_URL}/api/doctorVisits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorVisitData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Doctor visit added:', data);
    })
    .catch((error) => {
      console.error('Error adding doctor visit:', error);
    });
  };

  const handleLabResultSave = (labResultData) => {
     // const API_URL = process.env.REACT_APP_API_URL; //production
    const API_URL = 'http://localhost:3001'
    fetch(`${API_URL}/api/labResults`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(labResultData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Lab result added:', data);
    })
    .catch((error) => {
      console.error('Error adding lab result:', error);
    });
  };
  
  const renderForm = () => {
    switch (recordType) {
      case 'medications':
        return <MedicationForm onSaveMedication={handleMedicationSave} />;
      case 'doctorVisits':
        return <DoctorVisitForm onSaveDoctorVisit={handleDoctorVisitSave} />;
      case 'labResults':
        return <LabResultForm onSaveLabResult={handleLabResultSave} />;
      default:
        return null; 
    }
  };

  return (
    <>
      <form className="add-record-form" onSubmit={(e) => e.preventDefault()}>
        <select value={recordType} onChange={handleRecordTypeChange}>
          <option value="">Select Record Type</option>
          <option value="medications">Medications</option>
          <option value="doctorVisits">Doctor Visits</option>
          <option value="labResults">Lab Results</option>
        </select>
      </form>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderForm()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default AddRecordForm;
