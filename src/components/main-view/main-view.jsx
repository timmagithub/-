import React from 'react';
import axios from 'axios';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './main-view.scss';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';


export class MainView extends React.Component {

    constructor () {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            register: null
        };
    }

    componentDidMount(){
        axios.get('http://quikflix.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    setSelectedMovie(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    onRegistration(register) {
        this.setState({
            register
        });
    }

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    render() {
        const { movies, selectedMovie, user, register } = this.state;

        /* loads registration screen */
        if (!register) return <RegistrationView onRegistration={(register) => this.onRegistration(register)} />;
    
        /* loads login view if no user logged in */
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (movies.length === 0) return <div className="main-view" />;
    
        return (
            <Container>
            <Row className="main-view justify-content-md-center">
                {selectedMovie
                    ? (
                        <Col md={8}>
                            <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => 
                                { this.setSelectedMovie(newSelectedMovie); }}/>
                        </Col>
                    
                    )
                    : movies.map(movie => (
                        <Col md="3" className="movie-card-callback">
                            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => 
                                { this.setSelectedMovie(newSelectedMovie) }}/>
                        </Col>
                    ))
                }
            </Row>
          </Container>
        );
      }
    
}

export default MainView;