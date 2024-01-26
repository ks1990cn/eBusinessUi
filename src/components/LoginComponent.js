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

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (username === 'test' && password === 'test') {
      localStorage.setItem('isauthenticated', true);
      // Show a success toast notification
      toast.success('Login successful!');
      // Reload SideNav by navigating to the home route ("/home")
      navigate('/home', { replace: true });
    } else {
      localStorage.setItem('isauthenticated', false);
      // Show an error toast notification
      toast.error('Invalid username or password');
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
            We'll never share your username and password with anyone else.
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
