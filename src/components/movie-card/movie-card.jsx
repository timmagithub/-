import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import './movie-card.scss';

export class MovieCard extends React.Component {
    render() {
        const handleSubmit = (e) => {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            axios.post(`https://quikflix.herokuapp.com/users/${user}/myMovies/` + 
                this.props.movie._id, {}, {headers: { Authorization: `Bearer ${token}` }, })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    alert('Movie was added to your favorites. (If this was done in error, go to profile page to remove it.');
                })
                .catch(e=> {
                    console.log('error adding movie to your favorites')
                });
          };

        const { movie } = this.props;

        return ( 
            <Container className="card-container">
                <Card className="movie-card">
                    <Card.Img crossOrigin="anonymous" className="card-img" variant="top" src={movie.image} />

                        <Card.Body className="card-body">
                            <Card.Title className="card-title" >{movie.title}</Card.Title>
                        <Card.Text className="card-text" >{movie.year}</Card.Text>
                        <div>
                                <Link to={`/movies/${movie.title}`} >
                                    <Button variant="link">Open</Button>
                                </Link>
                                <Button variant="primary" className="card-btn" type="submit" onClick={handleSubmit}>
                                Add to Favs
                                </Button>
                        </div>    
                        </Card.Body>
                    </Card>
            </Container>
            );
    }
}

