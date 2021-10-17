import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './director-view.scss';

export class DirectorView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
  
  return (
    <Container>

    <div className="movie-view">
      <Row>
      <Col>
      <div className="director-name">

        <span className="label">Name: </span>
        <span className="value-title">{movie.director.name}</span>
        <br></br>
        
      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="director-bio">

        <span className="label">Bio: </span>
        <span className="value">{movie.director.bio}</span>

      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="director-birthdate">

        <span className="label">Birthdate: </span>
        <span className="value">{movie.director.birthDate}</span>

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

DirectorView.propTypes = {
  movie: PropTypes.shape ({
    director: PropTypes.shape ({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      birthDate: PropTypes.string.isRequired
    }),
  }),
  onClick: PropTypes.func
};