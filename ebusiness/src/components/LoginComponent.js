import React, {Component, useEffect} from 'react'
import '../componentcss/LoginComponent.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export class LoginComponent extends Component{
    render(){
        return(
            <div className='login-style'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Username" />
                        <Form.Text className="text-muted">
                        We'll never share your username and password with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> 
            </div>
        )
    }
}