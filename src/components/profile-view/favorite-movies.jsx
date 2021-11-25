import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import { MovieCard } from '../movie-card/movie-card';

import "./profile-view.scss"

export function FavoriteMovies( { handleDeleteMovie, movieList}) {
    return (
        <div >
            <h2>Favorite Movies</h2>
            <div className="fav-movies">
            {movieList.map(m => 
            <Col >
                <MovieCard movie={m} key={m._id} />
            </Col>    
        )}
        </div>
        </div>
    )
}