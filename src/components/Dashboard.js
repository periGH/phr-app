//Dashboard 
import React from 'react';
import AppointmentList from './AppointmentList'; 
import LabResults from './LabResults';           // Make sure the path is correct
import MedicationList from './MedicationList'; 
import './Dashboard.css'; 
import DoctorVisitList from './DoctorVisitList';

// const Dashboard = () => (
//     <div className="dashboard">
//       <AppointmentList />
//       <LabResults />
//       <MedicationList />
//     </div>
//   );

// export default Dashboard;

const Dashboard = () => {
    return (
      <div className="dashboard">
        <section className="appointments-section">
          <h2>Past Appointments</h2>
          <AppointmentList />
        </section>
        
        <section className="medication-schedule-section">
          <h2>Medication List</h2>
          <MedicationList />
        </section>

        <section className="doctor-visit-section">
          <h2>Doctor Visits</h2>
          <DoctorVisitList />
        </section>

        <section className="lab-results-section">
          <h2>Recent Lab Results</h2>
          <LabResults />
        </section>

      </div>
    );
  };
  
  export default Dashboard;