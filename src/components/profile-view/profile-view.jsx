import React from 'react';
import axios from 'axios';
 import { connect } from 'react-redux';


import { Button } from 'react-bootstrap';
import { setUser, setMovies } from '../../actions/actions-type';

import { UserInfo } from './user-info';
import { FavoriteMovies } from './favorite-movies';
import { UpdateUser } from './update-user';



import './profile-view.scss';


class ProfileView extends React.Component {

    constructor() {
        super();
        
    }

    render() {
        const handleDeleteUser = (e) => {
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

        const { movies, user } = this.props;

        return (

            <div className="profile-view">
                <UserInfo userName={user.userName} email={user.email}/>
            
                <FavoriteMovies movieList={user.movieList} movies={movies} />   

                <UpdateUser /> 
   
                <Button className="delete-user"onClick={handleDeleteUser}>Delete Account</Button>
                
            </div>
        );
    }
}

let mapStateToProps = state => {
    return { movies: state.movies,
    user: state.user }
}

export default connect(mapStateToProps, { setUser, setMovies })(ProfileView);


