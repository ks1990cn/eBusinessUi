import React, { useState } from 'react';
import { Sidenav, Nav } from 'rsuite'; 
import 'rsuite/dist/rsuite.min.css';
import  {GSTReportComponent} from '../components/GSTReportComponent'
export function ReportComponent() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'block', width: 250, paddingLeft: 30 }}>
        <Sidenav defaultOpenKeys={['3', '4']} >
          <Sidenav.Body>
            <Nav onSelect={handleSelect}>
              <Nav.Item eventKey="1">GST Report</Nav.Item>
              <Nav.Item eventKey="2">Monthly Sale Report</Nav.Item>
              <Nav.Item eventKey="3">Saving Report</Nav.Item>
              <Nav.Item eventKey="3">Staff Expense Report</Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
      <div style={{ flex: 1 }}>
        {selectedItem === '1' && <GSTReportComponent />}
        {/* Render GST Report component if the selected item is "GSTReport" */}
      </div>
    </div>
  );
}