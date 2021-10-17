import React from 'react';
import { Link } from 'react-router-dom';

export function FavoriteMovies( { handleDeleteMovie }) {
    return (
        <div>
            <h2>Favorite Movies</h2>
            {movieList.map((movies) => {
                return (
                    <div key={movies._id}> 
                        <img src={movies.image} />
                        <Link to={'.movies/${movies_id}'}>
                            <h4>{movies.title}</h4>
                        </Link>
                        <button variant='secondary' onClick={() => handleDeleteMovie(movies._id)}>Remove from list</button>
                    </div>
                )
            })}
        </div>

    )
}