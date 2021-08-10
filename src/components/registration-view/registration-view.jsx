import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
        <form>
            <label>Username: 
                <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>Create Password: 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>Email: 
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Birthdate: 
                <input type="birthDate" value={birthDate} onChange={(e) => setBirthdate(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

RegistrationView.propTypes = {
    user: PropTypes.shape({
        userName: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthdate: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
};