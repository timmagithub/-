import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './movie-card.scss';

class MovieCard extends React.Component {
    render() {
        const handleAddMovie = (e) => {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            axios.post(`https://quikflix.herokuapp.com/users/${user}/myMovies/` + 
                this.props.movie._id, {}, {headers: { Authorization: `Bearer ${token}` }, })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    alert('Movie was added to your favorites.');
                    location.reload();
                    return false;
                })
                .catch(e=> {
                    console.log('error adding movie to your favorites')
                });
        };

        const handleDeleteMovie = (e) => {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            axios.delete(`https://quikflix.herokuapp.com/users/${user}/myMovies/` + 
                this.props.movie._id, {headers: { Authorization: `Bearer ${token}` }, })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    alert('Movie was deleted from your favorites.');
                    location.reload();
                    return false;
                })
                .catch(e=> {
                    console.log('error deleting movie from your favorites')
                });
        };

        const { movie, user } = this.props;
        
        return ( 
            <Container className="card-container">
                <Card className="card-display">
                    <Card.Img crossOrigin="anonymous" className="card-img" variant="top" src={movie.image} />

                        <Card.Body className="card-body">
                            <Card.Title className="card-title" >{movie.title}</Card.Title>
                        <Card.Text className="card-text" >{movie.year}</Card.Text>
                        <div className="card-btns">
                            <Link to={`/movies/${movie.title}`} >
                               <Button className="open-btn" variant="primary">Open</Button>
                            </Link>
                            {user.movieList.find(m => m === movie._id) ? <Button variant="primary" className="card-btn" type="submit" onClick={handleDeleteMovie}>
                                Del
                            </Button> : <Button variant="primary" className="card-btn" type="submit" onClick={handleAddMovie}>
                                Add
                            </Button>
                            }
                        </div>    
                        </Card.Body>
                    </Card>
            </Container>
            );
    }
}

let mapStateToProps = state => {
    return { movies: state.movies,
    user: state.user}
}

export default connect(mapStateToProps)(MovieCard);