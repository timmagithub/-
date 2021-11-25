import React from 'react';
import axios from 'axios';
 import { connect } from 'react-redux';


import { Button } from 'react-bootstrap';
import { setUser } from '../../actions/actions';


import { UserInfo } from './user-info';
import { FavoriteMovies } from './favorite-movies';
import { UpdateUser } from './update-user';



import './profile-view.scss';


class ProfileView extends React.Component {

    constructor () {
        super();
        this.state = {
            userName: null,
            password: null,
            email: null,
            birthDate: null,
            movieList: []
        };
    }

    componentDidMount(){
        let accessToken = localStorage.getItem('token');
        this.getUser(accessToken);
        
    }

    getUser(token) {
        const user = localStorage.getItem('user');
        axios.get(`https://quikflix.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.setState({
                userName: response.data.userName,
                password: response.data.password,
                email: response.data.email,
                birthDate: response.data.birthDate,
                movieList: response.data.movieList
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleDeleteMovie() {
        axios.delete(`https://quikflix.herokuapp.com/users/${this.props.user}`, {
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

        axios.delete(`https://quikflix.herokuapp.com/users/${this.props.user}`, {
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
        const { userName, email, movieList, handleDeleteUser } = this.state;

        return (

            <div className="profile-view">
                <UserInfo userName={userName} email={email}/>
            
                <FavoriteMovies movieList={movieList} />   

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

export default connect(mapStateToProps, { setUser, UpdateUser })(ProfileView);


