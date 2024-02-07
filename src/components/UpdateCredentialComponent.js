
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export function UpdateCredentialComponent(){
    const [userName, setUserName] = useState('');
    const [newPassword, setnewPassword] = useState('');
    const handleReset = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
          const response = await fetch('http://localhost:8080/updatepassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, newPassword }),
          });
        
         if (response.ok) {
          } 
        } catch (error) {
          console.error('Error:', error);
        }
      };
    return(
        <div className='login-style'>
        <h3>Update Password</h3> 
        <Form onSubmit={handleReset}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>
    )
}