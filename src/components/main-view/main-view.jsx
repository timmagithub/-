import React from 'react';
import {MovieCard} from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';


export class MainView extends React.Component {

    constructor () {
        super();
        this.state = {
            movies: [
                {
                    "genre": {
                        "genrename": "Comedy",
                        "description": "Genre of film using humor as means of entertainment."
                    },
                    "director": {
                        "name": "Ben Stiller",
                        "birth_date": "1965-11-30",
                        "bio": "The son of comedians Jerry Stiller and Anne Meara, Ben Stiller grew up in New York City. Early in his career, he wrote for Saturday Night Live and created the short-lived The Ben Stiller Show. ... Stiller has since starred in Zoolander, as well as the successful Meet the Parents and Night at the Museum films."
                    },
                    "_id": "60d268f0acaf0f2101e0c73b",
                    "title": "Tropic Thunder",
                    "year": "2008",
                    "image": "https://www.imdb.com/title/tt0942385/mediaviewer/rm2796394240/?ref_=tt_ov_i",
                    "description": "Through a series of freak occurrences, a group of actors shooting a big-budget war movie are forced to become the soldiers they are portraying.",
                    "featured": true
                },
                {
                    "genre": {
                        "genrename": "Comedy",
                        "description": "Genre of film using humor as means of entertainment."
                    },
                    "director": {
                        "name": "Edgar Wright",
                        "birth_date": "1974-04-18",
                        "bio": "Edgar Howard Wright (born 18 April 1974) is an English director, screenwriter, producer, and actor. He is best known for his comedic Three Flavours Cornetto film trilogy consisting of Shaun of the Dead (2004), Hot Fuzz (2007), and The World's End (2013), made with recurrent collaborators Simon Pegg, Nira Park and Nick Frost. He also collaborated with them as the director of the television series Spaced."
                    },
                    "_id": "60d268e5acaf0f2101e0c73a",
                    "title": "Shaun of the Dead",
                    "year": "2004",
                    "image": "https://www.imdb.com/title/tt0365748/mediaviewer/rm4187183360/?ref_=tt_ov_i",
                    "description": "Shaun (Simon Pegg) is a 30something loser with a dull, easy existence. When he's not working at the electronics store, he lives with his slovenly best friend, Ed (Nick Frost), in a small flat on the outskirts of London. The only unpredictable element in his life is his girlfriend, Liz (Kate Ashfield), who wishes desperately for Shaun to grow up and be a man. When the town is inexplicably overrun with zombies, Shaun must rise to the occasion and protect both Liz and his mother (Penelope Wilton).",
                    "featured": true
                },
                {
                    "genre": {
                        "genrename": "Comedy",
                        "description": "Genre of film using humor as means of entertainment."
                    },
                    "director": {
                        "name": "Terry Gilliam",
                        "birth_date": "1940-11-22",
                        "bio": "Terry Gilliam was born near Medicine Lake, Minnesota. When he was 12 his family moved to Los Angeles where he became a fan of MAD magazine. In his early twenties he was often stopped by the police who suspected him of being a drug addict and Gilliam had to explain that he worked in advertising. In the political turmoil in the 60's, Gilliam feared he would become a terrorist and decided to leave the USA. He moved to England and landed a job on the children's television show Do Not Adjust Your Set (1967) as an animator. There he met meet his future collaborators in Monty Python: Terry Jones, Eric Idle and Michael Palin. In 2006 he renounced his American citizenship."
                    },
                    "_id": "60d268a6acaf0f2101e0c738",
                    "title": "Fear and Loathing in Las Vegas",
                    "year": "1998",
                    "image": "https://www.imdb.com/title/tt0120669/mediaviewer/rm1598101504/",
                    "description": "An oddball journalist and his psychopathic lawyer travel to Las Vegas for a series of psychedelic escapades.",
                    "featured": true
                }
            ],
            selectedMovie: null
        }
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;
    
    
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
        return (
          <div className="main-view">
            {selectedMovie
              ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => 
                    { this.setSelectedMovie(newSelectedMovie); }}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => 
                    { this.setSelectedMovie(movie) }}/>
              ))
            }
          </div>
        );
      }
    
}

export default MainView;