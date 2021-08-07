import React, { useState } from 'react';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    /* send request to server to authenticate then call props.onLoggedIn(username) */
    const handleSubmit = () => {
        e.preventDefault();
        console.log(username, password);
        props.onLoggedIn(username);
    };

    /* form inserted to login */
    return (
        <form>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}