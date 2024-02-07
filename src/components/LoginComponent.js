import React, { useState } from 'react';
import '../componentsCSS/LoginComponent.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if(response.status == 303){
        navigate('/updatePassword', { replace: true });
        // Show a success toast notification
        window.location.reload();
      }
      else if (response.ok) {
        localStorage.setItem('isauthenticated', true);
        // Navigate to the home route ("/home")
        navigate('/home', { replace: true });
        // Show a success toast notification
        window.location.reload();
      } 
    } catch (error) {
      console.error('Error:', error);
      // Show an error toast notification
      toast.error('Error occurred while logging in');
    }
  };


  return (
    <div className='login-style'>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            Username : test and Password : test
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </div>
  );
}
