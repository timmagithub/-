import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
  
  return (
    <Container>

    <div className="movie-view">
      <Row>
      <Col>
      <div className="movie-poster">
        <img src={movie.image} />
      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="movie-title">

        <span className="label">Title: </span>
        <span className="value-title">{movie.title}</span>
        <br></br>
        
      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="movie-description">

        <span className="label">Description: </span>
        <span className="value">{movie.description}</span>

      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="director">

        <span className="label">Director: </span>
        <span className="value">{movie.director.name}</span>

      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="genre">

        <span className="label">Genre: </span>
        <span className="value">{movie.genre.genrename}</span>

      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <Button variant="primary" onClick={() => onBackClick(null)}>
        Back
      </Button>
      </Col>
      </Row>

    </div>
    </Container>
    );
  }
}

MovieView.PropTypes = {
  movie: PropTypes.shape ({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.shape ({
      name: PropTypes.string.isRequired
    }),
    genre: PropTypes.shape ({
      genrename: PropTypes.string.isRequired
    })
  }),
  onClick: PropTypes.func.isRequired
};