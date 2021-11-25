import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './director-view.scss';

export class DirectorView extends React.Component {

  render() {
    const { director, onBackClick } = this.props;
  
  return (
    <Container>

    <div className="movie-view">
      <Row>
      <Col>
      <div className="director-name">

        <span className="label">Name: </span>
        <span className="value-title">{director.name}</span>
        <br></br>
        
      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="director-bio">

        <span className="label">Bio: </span>
        <span className="value">{director.bio}</span>

      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="director-birthDate">

        <span className="label">Birthdate: </span>
        <span className="value">{director.birth_date}</span>

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
