import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export class NavbarView extends React.Component {
    onLoggedOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user'); 
            console.log('logged out');
            this.setState({
                user: null
            });
    }

    render() {
        const { user } = this.props;
        
        return (
                <Navbar>
                    <h1>quikFlix</h1>
                    <Nav.Link href={`/users/${user}`}>
                        Profile
                    </Nav.Link>
                    <Nav.Link href={`/`}>
                        Movies
                    </Nav.Link>
                    <Nav.Link href={'/'} onClick={this.onLoggedOut}>
                        Log Out
                    </Nav.Link>
                </Navbar>
                
        )
    }
}

