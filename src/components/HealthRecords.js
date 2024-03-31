// // HealthRecords.js
// import React, { useState, useEffect } from 'react';

// const HealthRecords = () => {
//   // This is where you would fetch and map your health records data

//   const [records, setRecords] = useState([]); // State to store the records

//   useEffect(() => {
//     fetch('/api/healthrecords') //fetch('http://localhost:3001/api/healthrecords')
//       .then(response => response.json())
//       .then(data => {
//         // Use the data in your component
//       });
//   }, []);

//   // useEffect(() => {
//   //   fetch('http://localhost:3001/api/healthrecords')
//   //     .then(response => response.json())
//   //     .then(data => console.log(data)); // Or set state to render in your component
//   // }, []);

//   return (
//     <div className="health-records">
//       <h1>Health Records</h1>
//       <p>This section will display the user's health records.</p>
//       {/* This could be a list or table of health record entries */}
//     </div>
//   );
// };
//export default HealthRecords;

// import React, { useState, useEffect } from 'react';
// import MedicationList from './MedicationList';
// import DoctorVisitList from './DoctorVisitList';
// import LabResults from './LabResults';

// const HealthRecords = () => {
//   const [medications, setMedications] = useState([]);
//   const [doctorVisits, setDoctorVisits] = useState([]);
//   const [labResults, setLabResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch medications
//     fetch('http://localhost:3001/api/medications')
//       .then(response => response.json())
//       .then(data => setMedications(data))
//       .catch(error => setError(error));

//     // Fetch doctor visits
//     fetch('http://localhost:3001/api/doctorVisits')
//       .then(response => response.json())
//       .then(data => setDoctorVisits(data))
//       .catch(error => setError(error));

//     // Fetch lab results
//     fetch('http://localhost:3001/api/labresults')
//       .then(response => response.json())
//       .then(data => setLabResults(data))
//       .catch(error => setError(error))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="health-records">
//       <h1>Health Records</h1>
//       {medications.length > 0 && (
//         <>
//           <h2>Medications</h2>
//           <ul>
//             {medications.map((medication) => (
//               <li key={medication._id}>{medication.name} - {medication.dosage}</li>
//             ))}
//           </ul>
//         </>
//       )}
//       {doctorVisits.length > 0 && (
//         <>
//           <h2>Doctor Visits</h2>
//           <ul>
//             {doctorVisits.map((visit) => (
//               <li key={visit._id}>{visit.date} - {visit.doctorName}</li>
//             ))}
//           </ul>
//         </>
//       )}
//       {labResults.length > 0 && (
//         <>
//           <h2>Lab Results</h2>
//           <ul>
//             {labResults.map((result) => (
//               <li key={result._id}>{result.date} - {result.testType}</li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// export default HealthRecords;




import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MedicationList from './MedicationList';
import DoctorVisitList from './DoctorVisitList';
import LabResults from './LabResults';

const HealthRecords = () => {
  return (
    <Tabs defaultActiveKey="medications" id="health-records">
      <Tab eventKey="medications" title="Medications">
        <MedicationList />
      </Tab>
      <Tab eventKey="doctorVisits" title="Doctor Visits">
        <DoctorVisitList />
      </Tab>
      <Tab eventKey="labResults" title="Lab Results">
        <LabResults />
      </Tab>
    </Tabs>
  );
};

export default HealthRecords;
