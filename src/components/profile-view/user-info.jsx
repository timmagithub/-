import React from 'react';

export function UserInfo ({ email, userName }) {
    
    return (
        <div className="user-info" >
            <p>userName: {userName}</p>
            <p>Email: {email}</p>
        </div>
    )
}