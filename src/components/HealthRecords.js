
import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MedicationList from './MedicationList';
import DoctorVisitList from './DoctorVisitList';
import LabResults from './LabResults';
import './HealthRecords.css';

const HealthRecords = () => {
  return (
    <div className="health-records-container"> {/* This applies your new styles */}
      <Tabs defaultActiveKey="medications" id="health-records" className="react-bootstrap-tabs">
        <Tab eventKey="medications" title="Medications" className="tab-content">
          <MedicationList />
        </Tab>
        <Tab eventKey="doctorVisits" title="Doctor Visits" className="tab-content">
          <DoctorVisitList />
        </Tab>
        <Tab eventKey="labResults" title="Lab Results" className="tab-content">
          <LabResults />
        </Tab>
      </Tabs>
    </div>
  );
};

export default HealthRecords;
