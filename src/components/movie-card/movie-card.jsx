import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import './movie-card.scss';

export class MovieCard extends React.Component {
    render() {

        const { movie } = this.props;

        return ( 
            <Container className="card-container">
                <Card className="movie-card">
                    <Card.Img variant="top" src={movie.image} />

                        <Card.Body className="card-body">
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.year}</Card.Text>
                            <Link to={'/movies/${movie._id}'} >
                                <Button variant="link">Open</Button>
                            </Link>
                        </Card.Body>
                    </Card>
            </Container>
            );
    }
}

MovieCard.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
};