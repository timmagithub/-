import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { ProfileView } from '../profile-view/profile-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { NavbarView } from '../navbar-view/navbar-view';


import './main-view.scss';


export class MainView extends React.Component {

    constructor () {
        super();
        this.state = {
            movies: [],
            user: null
        };
    }

    getMovies(token) {
        axios.get('https://quikflix.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
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

    componentDidMount(){
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getMovies(accessToken);
        }
    }

    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
            user: authData.user.username
        });
        
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.username);
        this.getMovies(authData.token);
    }

    onLoggedOut = () => {
        localStorage.clear();
        window.open('/', '_self');
    }

    render() {
        const { user, movies, history } = this.state;

        return (
            <Router>
                <NavbarView />

                <Row className="main-view justify-content-md-center">

                    <Route exact path="/" render={() => {
                        if (!user) return <Col> 
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                        if (movies.length === 0) return <div className="main-view" />;
                        return movies.map(m => (
                            <Col md={3} key={m._id}>
                                <MovieCard movie={m} />
                            </Col>
                            ))
                        }} />   

                    {/* return movie by name */}    
                    <Route path="/movies/:title" render={({ match, history }) => {
                        if (!user) return <Col> 
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                        if (movies.length === 0) return <div className="main-view" />;
                        return <Col md={8}>
                            <MovieView movie={movies.find(m => m.title === match.params.title)} onBackClick={() => history.goBack()} />
                        </Col>
                    }} />
        
                    {/* return genre by name */}
                    <Route path="/genres/:genreName" render={({ match, history }) => {
                        if (!user) return <Col> 
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                        if (movies.length === 0) return <div className="main-view" />;
                        return <Col md={8}>
                            <GenreView genre={movies.find(m => m.genres.genrename === match.params.genreName).genres} onBackClick={() => history.goBack()} />
                        </Col>
                    }} />

                    {/* registration view */}    
                    <Route path="/register" render={() => {
                        if (user) return <Redirect to ="/" />
                        return <Col>
                            <RegistrationView />
                        </Col>
                    }} /> 

                    {/* return director by name */}
                    <Route path="/directors/:name" render={({ match, history }) => {
                        if (!user) return <Col> 
                                 <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                        if (movies.length === 0) return <div className="main-view" />;
                        return <Col md={8}>
                            <DirectorView director={movies.find(m => m.directors.name === match.params.name).directors} onBackClick={() => history.goBack()} />
                        </Col>
                    }} />
                    
                    {/* return profile by username */}
                    <Route exact path="/users/:userName" render={({ history }) => {
                        if (!user)
                            return 
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                        if (movies.length === 0) return <div className="main-view">
                        return 
                            <ProfileView history={history} movies={movies} />
                        </div>    
                    }} />     

                </Row>

            </Router>
        );
    }
}

export default MainView;