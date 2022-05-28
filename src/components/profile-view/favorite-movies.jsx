import React from 'react';

import MovieCard from '../movie-card/movie-card';

import "./profile-view.scss"

export function FavoriteMovies({ movieList, movies }) {
    
    
    return (
        <div className="fav-movies">
            <h2>Favorite Movies</h2>
            <div className="movie-list">
            {movies.filter(f => movieList.find(m => f._id === m)).map(m => 
               
                    <div className="fav-card">
                        <MovieCard movie={m} key={m._id} />
                        </div>
               
        )}
        </div>
        </div>
    )
}