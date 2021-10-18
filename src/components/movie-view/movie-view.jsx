import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import './movie-view.scss';
export class MovieView extends React.Component {

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


    const { movie, onBackClick } = this.props;

  return (
      <Container>

        <div className="movie-view">
          <Row>
            <Col>
              <div className="movie-poster">
                <img crossOrigin="anonymous" variant="top" src={movie.image} />
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
              <span className="label">Director: </span>
              <Link to={`/directors/${movie.director.name}`}>
                <Button variant="link">{movie.director.name}</Button>
              </Link>              
            </Col>
          </Row>  

          <Row>
            <Col>
              <span className="label">Genre: </span>
              <Link to={`/genres/${movie.genre.genrename}`}>
                <Button variant="link">{movie.genre.genrename}</Button>
              </Link>
              <br/>
              <br/>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Add to Favs
              </Button>
            </Col>

            <Col>
              <Button variant="primary" onClick={() => onBackClick(null)}>
                Back
              </Button>
            </Col>
          </Row>

        </div>
      </Container>
   
   )}
}

MovieView.propTypes = {
  movie: PropTypes.shape ({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.shape ({
      name: PropTypes.string.isRequired
    }),
    genre: PropTypes.shape ({
      genreName: PropTypes.string.isRequired
    })
  }),
  onClick: PropTypes.func
};