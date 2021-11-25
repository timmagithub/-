import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form } from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';

export function UpdateUser() {

    const [ userName, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthDate, setBirthdate ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        axios.put(`https://quikflix.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${token}` }
        }, {
            userName: userName,
            password: password,
            email: email,
            birthDate: birthDate
        })
        .then(response => {
            alert('Your account has been updated.');
            const data = response.data;
            console.log(data);
        })
        .catch(e=> {
            console.log('error registering the user')
        });
    };

    
    return (
        /* update user interface */
        <Container className="update-container">
            <Form className="update-view">

                <h2>Update User Information</h2>
                
                <Form.Group controlId="formuserName">
                    <Form.Label>
                        Change userName:
                    </Form.Label> 
                    <Form.Control 
                        className="input" 
                        type="text"  
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
            
                <Form.Group controlId="formPassword">
                    <Form.Label>
                        Change password: 
                    </Form.Label>
                    <Form.Control 
                        className="input" 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>
                        Change email:
                    </Form.Label> 
                    <Form.Control 
                        className="input" 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                
                <Form.Group controlId="formbirthDate">
                    <Form.Label>
                        Change birthDate: 
                    </Form.Label>
                        <Form.Control 
                            className="input" 
                            type="birthDate" 
                            onChange={(e) => setBirthdate(e.target.value)} />
                </Form.Group>

                <Button 
                    variant="primary" 
                    type="submit" 
                    onClick={handleSubmit}>
                    Submit
                </Button>

            </Form>
        </Container>


    )
}