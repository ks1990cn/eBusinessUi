import React from 'react'
import { Sidenav, Nav, Dropdown } from 'rsuite'; 
import 'rsuite/dist/rsuite.min.css';
export function ReportComponent() { 
  
  return ( 
    <div style={{ 
      display: 'block', width: 250, paddingLeft: 30 
    }}> 
      <Sidenav defaultOpenKeys={['3', '4']}> 
        <Sidenav.Body> 
          <Nav> 
            <Nav.Item eventKey="1">Dashboard</Nav.Item> 
            <Nav.Item eventKey="2">Profile</Nav.Item> 
            <Nav.Item eventKey="3">Settings</Nav.Item> 
          </Nav> 
        </Sidenav.Body> 
      </Sidenav> 
    </div> 
  ); 
}