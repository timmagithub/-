import React from 'react';
import { Container, Form } from 'react-bootstrap'; 

export function UpdateUser( { handleSubmit, updateUser }) {
    return (
        /* update user interface */
        <Container className="update-container">
            <Form className="update-view" onSubmit={(e) => handleSubmit(e)}>

                <h2>Update User Information</h2>
                
                <Form.Group controlId="formUsername">
                    <Form.Label>
                        Change username:
                    </Form.Label> 
                    <Form.Control 
                        className="input" 
                        type="text" 
                        value={user.userName} 
                        onChange={updateUser} />
                </Form.Group>
            
                <Form.Group controlId="formPassword">
                    <Form.Label>
                        Change password: 
                    </Form.Label>
                    <Form.Control 
                        className="input" 
                        type="password" 
                        value={user.password} 
                        onChange={updateUser} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>
                    Change email:
                    </Form.Label> 
                <Form.Control 
                    className="input" 
                    type="email" 
                    value={user.email} 
                    onChange={updateUser} />
                </Form.Group>
                
                <Form.Group controlId="formBirthdate">
                    <Form.Label>
                    Change birthdate: 
                    </Form.Label>
                    <Form.Control 
                        className="input" 
                        type="birthDate" 
                        value={user.birthDate} 
                        onChange={updateUser} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>

            </Form>
        </Container>


    )
}