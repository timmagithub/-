import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './movie-card.scss';

export class MovieCard extends React.Component {
    render() {
        const {movie, onMovieClick} = this.props;
        return ( 
            <Container className="card-container">
                <Row>
                    <Col>
                        <Card className="movie-card">
                            <Card.Img variant="top" src={movie.image} />

                            <Card.Body className="card-body">
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.year}</Card.Text>
                                <Button onClick={() => onMovieClick(movie)} variant="primary">
                                    More Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
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