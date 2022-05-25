import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { LoginView } from '../login-view/login-view';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import ProfileView from '../profile-view/profile-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { NavbarView } from '../navbar-view/navbar-view';

import { setMovies, setUser } from '../../actions/actions-type'

import MoviesList from '../movies-list/movies-list';

import './main-view.scss';

class MainView extends React.Component {

    constructor () {
        super();
    }

    componentDidMount(){
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.getUser(accessToken);
            this.getMovies(accessToken);
        }
    }

    getUser(token) {
        const user = localStorage.getItem('user');
        axios.get(`https://quikflix.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                this.props.setUser({
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

    getMovies(token) {
        axios.get('https://quikflix.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.props.setMovies(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onLoggedIn(authData) {
        // console.log(authData);
        this.props.setUser(authData.user);
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.userName);
        this.getMovies(authData.token);
    }

    render() {
        
        const { movies, user } = this.props;

        return (
            <Router className="router-body">
                <NavbarView user={user} />

                <Row className="main-view justify-content-md-center">

                    <Route exact path="/" render={() => {
                        if (!user) return <Col> 
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                        if (movies.length === 0) return <div className="main-view" />;
                        return <MoviesList movies={movies} />;
                    
                        }} />   

                    
                    {/* registration view */}    
                    <Route path="/register" render={() => {
                        if (user) return <Redirect to ="/" />
                        return <Col>
                            <RegistrationView />
                        </Col>
                    }} /> 

                    {/* return movie by name */}    
                    <Route path="/movies/:title" render={({ match, history }) => {
                        if (!user) return <Col> 
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                        if (movies.length === 0) return <div className="main-view" />;
                        return <Col md={8}>
                            <MovieView 
                                movie={movies.find(m => m.title === match.params.title)} 
                                onBackClick={() => history.goBack()} />
                        </Col>
                    }} />
        
                    {/* return genre by name */}
                    <Route exact path="/genres/:genre" render={({ match, history }) => {
                        if (!user) return <Col> 
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                        if (movies.length === 0) return <div className="main-view" />;
                        return <Col md={8}>
                            <GenreView 
                                genre={movies.find(m => m.genre.genrename === match.params.genre).genre} 
                                onBackClick={() => history.goBack()}  />
                        </Col>
                    }} />

                    {/* return director by name */}
                    <Route exact path="/directors/:name" render={({ match, history }) => {
                        if (!user) return <Col> 
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                        if (movies.length === 0) return <div className="main-view" />;
                        return <Col md={8}>
                            <DirectorView 
                                director={movies.find(m => m.director.name === match.params.name).director} 
                                onBackClick={() => history.goBack()} />
                        </Col>
                    }} />
                    
                    {/* return profile by userName */}
                    <Route exact path="/users/:userName" render={({ history }) => {
                        if (!user) return <Col>
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>    
                        return <ProfileView history={history} />    
                    }} />     

                </Row>

            </Router>
        );
    }
}

let mapStateToProps = state => {
    return { movies: state.movies,
    user: state.user}
}

export default connect(mapStateToProps, { setMovies, setUser } )(MainView);