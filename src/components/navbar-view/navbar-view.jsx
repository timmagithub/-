import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

import './navbar.scss'
export class NavbarView extends React.Component {
    onLoggedOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user'); 
            console.log('logged out');
            this.props.setUser(null);
    }

    render() {
        const { user } = this.props;
        
        return (
                <Navbar className="navbar">
                    <h1>quikFlix</h1>
                    <Nav.Link className="nav-link" href={`/users/${user}`}>
                        Profile
                    </Nav.Link>
                    <Nav.Link className="nav-link" href={`/`}>
                        Movies
                    </Nav.Link>
                    <Nav.Link className="nav-link" href={'/'} onClick={this.onLoggedOut}>
                        Log Out
                    </Nav.Link>
                </Navbar>
                
        )
    }
}

