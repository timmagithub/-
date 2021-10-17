import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
 
import './login-view.scss'

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    /* send request to server to authenticate then call props.onLoggedIn(username) */
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://quikflix.herokuapp.com/login', {
            userName: username,
            password: password
        })
        .then(response => {
            const data = response.data;
            props.onLoggedIn(data);
            window.open('/', '_self');
        })
        .catch(e => {
            console.log('no such user')
        });
        
    };


    /* form inserted to login */
    return (
        <Container className="container">
        <Form className="login-form">
            
            <Form.Group controlId="formUsername">
                
                <Form.Label>
                    Username: 
                </Form.Label>
                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
            
            </Form.Group>
           
            <Form.Group controlId="formPassword">

                <Form.Label>
                    Password:
                </Form.Label>
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>

            <Link to={'/register'} >
                <Button variant="link">Register</Button>
            </Link>

        </Form>
        </Container>
    );
}

LoginView.propTypes = {
    user: PropTypes.shape ({
        userName: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func
};