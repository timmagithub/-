import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './genre-view.scss';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;
  
  return (
    <Container>

    <div className="genre-view">
      <Row>
      <Col>
      <div className="genre-name">

        <span className="label">Genre: </span>
        <span className="value-title">{movie.genre.genrename}</span>
        <br></br>
        
      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="genre-description">

        <span className="label">Description: </span>
        <span className="value">{movie.genre.description}</span>

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

GenreView.PropTypes = {
  movie: PropTypes.shape ({
    genre: PropTypes.shape ({
      genrename: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  }),
  onClick: PropTypes.func.isRequired
};