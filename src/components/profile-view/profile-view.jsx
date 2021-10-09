import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Card, Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import './profile-view.scss';


export class ProfileView extends React.Component {

    constructor () {
        super();
        this.state = {
            username: null,
            password: null,
            email: null,
            birthdate: null,
            movieList: []
        };
    }

    componentDidMount(){
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getUser(accessToken);
        }
    }

    getUser(token) {
        axios.get('https://quikflix.herokuapp.com/users/${userName}', {
            headers: { Authorization: 'Bearer ${token}' }
        })
        .then(response => {
            this.setState({
                username: response.data.userName,
                password: response.data.password,
                email: response.data.email,
                birthdate: response.data.birthDate,
                movieList: response.data.movieList
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    getMovies(token) {
        axios.get('https://quikflix.herokuapp.com/users/${userName}/myMovies', {
            headers: { Authorization: 'Bearer ${token}' }
        })
        .then(response => {
            this.setState({
                movies: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    updateUser(token) {

        const [ userName, setUsername ] = useState('');
        const [ password, setPassword ] = useState('');
        const [ email, setEmail ] = useState('');
        const [ birthDate, setBirthdate ] = useState('');

        e.preventDefault();
        axios.put('https://quikflix.herokuapp.com/users', {
            headers: { Authorization: 'Bearer ${token}' },
            data:{
                userName: setUsername,
                password: setPassword,
                email: setEmail,
                birthDate: setBirthdate
            }
        })
        .then(response => {
            alert('Changes Saved.');
            this.setState({
                userName: response.data.username,
                password: response.data.password,
                email: response.data.email,
                birthdate: response.data.birthDate
            })
            window.open('/users/${userName}', '_self');
        })
        .catch(e=> {
            console.log('error updating user')
        });
    }

    handleDeleteMovie() {
        axios.delete('https://quikflix.herokuapp.com/users/${userName}', {
            headers: { Authorization: 'Bearer ${token}' }
        })
        .then(() => {
            alert('Movie removed from list.');
            this.componentDidMount();
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    handleDeleteUser(e) {
        e.preventDefault();

        axios.delete('https://quikflix.herokuapp.com/users/${userName}', {
            headers: { Authorization: 'Bearer ${token}' }
        })
        .then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            alert('Goodbye!');
            window.open('/', '_self');
        })
        .catch((e) => {
            console.log(e);
        });
    }
       
    render() {
        return (
            /* update user interface */
            <Card.Body>
            <Container className="update-container">
            <Form className="update-view">
    
                <Form.Group controlId="formUsername">
                    <Form.Label>
                        Change username:
                    </Form.Label> 
                    <Form.Control className="input" type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
               
                <Form.Group controlId="formPassword">
                    <Form.Label>
                        Change password: 
                    </Form.Label>
                    <Form.Control className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
    
                <Form.Group controlId="formEmail">
                    <Form.Label>
                      Change email:
                    </Form.Label> 
                 <Form.Control className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                
                <Form.Group controlId="formBirthdate">
                    <Form.Label>
                      Change birthdate: 
                    </Form.Label>
                    <Form.Control className="input" type="birthDate" value={birthDate} onChange={(e) => setBirthdate(e.target.value)} />
                </Form.Group>
    
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
    
            </Form>
            </Container>
            </Card.Body>

        /* users movieList */

        /* allow user to remove movie from movieList */

        /* allow user to deregister */

        );
    }
}

ProfileView.PropTypes = {
    user: PropTypes.shape ({
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      movieList: PropTypes.arrayOf(
          PropTypes.shape({
              _id: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired
          })
        )
    }),
    onClick: PropTypes.func.isRequired
  };