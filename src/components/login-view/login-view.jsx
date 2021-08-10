import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
    const [ userName, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    
    /* send request to server to authenticate then call props.onLoggedIn(username) */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, password);
        props.onLoggedIn(userName);
      };

    /* form inserted to login */
    return (
        <form>
            <label>
                Username:
                <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit" onClick={(e) => handleSubmit}>Submit</button>
        </form>
    );
}

LoginView.propTypes = {
    user: PropTypes.shape({
        userName: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }),
    onLoggedIn: PropTypes.func.isRequired
};
