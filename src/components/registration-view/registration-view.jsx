import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './registration-view.scss';

export function RegistrationView(props) {
    const [ userName, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthDate, setBirthdate ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, password, email, birthDate);
        props.onRegistration(userName);
    };

    return (
        <Container className="container">
        <Form className="registration-view">

            <Form.Group controlId="formUsername">
                <Form.Label>
                    Username:
                </Form.Label> 
                <Form.Control className="input" type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
           
            <Form.Group controlId="formPassword">
                <Form.Label>
                    Create Password: 
                </Form.Label>
                <Form.Control className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>
                  Email:
                </Form.Label> 
             <Form.Control className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            
            <Form.Group controlId="formBirthdate">
                <Form.Label>
                  Birthdate: 
                </Form.Label>
                <Form.Control className="input" type="birthDate" value={birthDate} onChange={(e) => setBirthdate(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>

        </Form>
        </Container>
    );
}

RegistrationView.propTypes = {
    user: PropTypes.shape({
        userName: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthDate: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func
};