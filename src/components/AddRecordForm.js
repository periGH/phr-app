// // AddRecordForm.js
// import React, { useState } from 'react';

// const AddRecordForm = () => {
//   const [record, setRecord] = useState({
//     // Initialize state with the structure of the health record you expect
//     // For example:
//     // date: '',
//     // description: '',
//     // doctor: ''
//     category: 'labResult', // default category
//     description: '',
//     date: '',
//     doctor: ''
//     // Add more fields as needed
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecord({ ...record, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle the form submission, send the record to the server
//     // possibly sending the new record to your backend via an API
//     // Example: axios.post('/api/records', record)
//     console.log(record);
//   };

// //   return (
// //     <form className="add-record-form" onSubmit={handleSubmit}>
// //       {/* Render input fields here, e.g.: */}
// //       <input
// //         type="text"
// //         name="description"
// //         value={record.description}
// //         onChange={handleChange}
// //         placeholder="Description"
// //       />
// //       {/* Include other fields similarly and a submit button */}
// //       <button type="submit">Add Record</button>
// //     </form>
// //   );
// // };

// return (
//   <form className="add-record-form" onSubmit={handleSubmit}>
//     <select name="category" value={record.category} onChange={handleChange}>
//       <option value="labResult">Lab Result</option>
//       <option value="medication">Medication</option>
//       <option value="doctorVisit">Doctor Visit</option>
//     </select>
//     {/* Add more inputs here based on the category */}
//     <input
//       type="text"
//       name="description"
//       value={record.description}
//       onChange={handleChange}
//       placeholder="Description"
//     />
//     <input
//       type="date"
//       name="date"
//       value={record.date}
//       onChange={handleChange}
//     />
//     {/* ... */}
//     <button type="submit">Add Record</button>
//   </form>
// );
// };

// export default AddRecordForm;


import React, { useState } from 'react';
import MedicationForm from './MedicationForm';
import DoctorVisitForm from './DoctorVisitForm';
import LabResultForm from './LabResultForm';

const AddRecordForm = () => {
  const [recordType, setRecordType] = useState('');

  const handleRecordTypeChange = (e) => {
    setRecordType(e.target.value);
  };

  // ... Any other handlers for different form types

  // console.log('http://localhost:3001', JSON.stringify(medicationData));

  const handleMedicationSave = (medicationData) => {
    // Define the API endpoint
    const API_URL = process.env.REACT_APP_API_URL; // e.g., 'http://localhost:3001'
  
    console.log('Sending medication data to:', `${API_URL}/api/medications`, 'Data:', JSON.stringify(medicationData));
    console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
  
    // Make a POST request to your API endpoint
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
      // Handle successful response
      // For example, you may want to clear the form or update a list of medications.
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle errors here, such as displaying a message to the user.
    });
  };
  

  // ... Similarly, you would have handlers for saving doctor visits, lab results, etc.
  const handleDoctorVisitSave = (doctorVisitData) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/doctorVisits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorVisitData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Doctor visit added:', data);
      // Update UI accordingly
    })
    .catch((error) => {
      console.error('Error adding doctor visit:', error);
    });
  };

  const handleLabResultSave = (labResultData) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/labResults`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(labResultData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Lab result added:', data);
      // Update UI to reflect the new lab result
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
        // break;
      case 'labResults':
        return <LabResultForm onSaveLabResult={handleLabResultSave} />;
        // break;
      default:
        return null; // or some default content
    }
  };

  return (
    <div>
      <form className="add-record-form" onSubmit={(e) => e.preventDefault()}>
        <select value={recordType} onChange={handleRecordTypeChange}>
          <option value="">Select Record Type</option>
          <option value="medications">Medications</option>
          <option value="doctorVisits">Doctor Visits</option>
          <option value="labResults">Lab Results</option>
          {/* More options as necessary */}
        </select>
      </form>
      {renderForm()}
    </div>
  );
};

export default AddRecordForm;


////////////////////////
// import React, { useState } from 'react';
// import MedicationForm from './MedicationForm';

// const AddRecordForm = () => {
//   const [recordType, setRecordType] = useState('');

//   const handleRecordTypeChange = (e) => {
//     setRecordType(e.target.value);
//   };

//   const handleMedicationSave = (medicationData) => {
//     // Logic to send medicationData to the backend
//   };

//   const renderForm = () => {
//     switch (recordType) {
//       case 'medications':
//         return <MedicationForm onSaveMedication={handleMedicationSave} />;
//       case 'doctorVisits':
//         // return <DoctorVisitForm onSaveDoctorVisit={handleDoctorVisitSave} />;
//         break;
//       case 'labResults':
//         // return <LabResultForm onSaveLabResult={handleLabResultSave} />;
//         break;
//       default:
//         return null; // or some default content
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission based on the record type selected
//   };


//   return (
//     <form className="add-record-form" onSubmit={handleSubmit}>
//       <select value={recordType} onChange={handleRecordTypeChange}>
//         <option value="">Select Record Type</option>
//         <option value="medications">Medications</option>
//         <option value="doctorVisits">Doctor Visits</option>
//         <option value="labResults">Lab Results</option>
//         {/* More options as necessary */}
//       </select>
//       {/* Conditional form fields based on recordType */}
//       <button type="submit">Add Record</button>
//     </form>
//   );
// };

// export default AddRecordForm;