import React, { useState }from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { UserInfo } from './user-info';
import { FavoriteMovies } from './favorite-movies';
import { UpdateUser } from './update-user';



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
        axios.get('https://quikflix.herokuapp.com/users/${user}', {
            headers: { Authorization: `Bearer ${token}` }
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

    updateUser(token) {

        const [ username, setUsername ] = useState('');
        const [ password, setPassword ] = useState('');
        const [ email, setEmail ] = useState('');
        const [ birthDate, setBirthdate ] = useState('');

        e.preventDefault();
        axios.put(`https://quikflix.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${token}` },
            data:{
                username: setUsername,
                password: setPassword,
                email: setEmail,
                birthDate: setBirthdate
            }
        })
        .then(response => {
            alert('Changes Saved.');
            this.setState({
                username: response.data.username,
                password: response.data.password,
                email: response.data.email,
                birthdate: response.data.birthDate
            })
            window.open('/users/${user}', '_self');
        })
        .catch(e=> {
            console.log('error updating user')
        });
    }

    handleDeleteMovie() {
        axios.delete(`https://quikflix.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${token}` }
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

        axios.delete(`https://quikflix.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${token}` }
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
        const { user } = this.state;

        return (

            <div>
                /* display user info */
                <UserInfo name={user.username} email={user.email}/>
                
                /* users movieList with button to remove movie from list */
                <FavoriteMovies movieList={movieList} />   

                /* update user interface */
               <UpdateUser handleSubmit={handleSubmit} /> 

                /* allow user to deregister */    
                <Button onClick={handleDeleteUser}>Delete Account</Button>
                
            </div>
        );
    }
}

ProfileView.propTypes = {
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
    onClick: PropTypes.func
  };