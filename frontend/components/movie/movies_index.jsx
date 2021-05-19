import React from 'react';
import { Link } from 'react-router-dom';
// import { SourceMapGenerator } from 'source-map';

// import { logout } from '../../actions/session';
import HomeMovie from './home_movie';
import GenreContainer from '../genre/genre_container';


class MoviesIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {genres: [], movies: []};
        // this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        this.props.fetchGenres().then(this.props.fetchMovies());
        // this.props.fetchMovies().then(res => console.log(res))
    }

    // logout(dispatch){
    //     return (user) => dispatch(login(user));
    // }
    
    render(){
        
        return (
        <div className='movies-index'>

            {/* <div className='NavBar'>
                    <img id='logo' src="https://fontmeme.com/permalink/210319/d1842af13f3a1a8770c2a1aabea4152d.png"/>
                    <div className='right-nav'>
                        <a href="https://github.com/dannyho77"><img src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" id="github"/></a>
                        <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" id="linkedin"/></a>
                        <button onClick={this.logout}>Sign Out</button>
                    </div>
            </div> */}

            <HomeMovie id='main-movie-player'/>

            <div>
                {/* {this.props.genres.map(genre => {
                    return(
                        <GenreModule genre={genre}/>
                    );
                })} */}
                {this.props.movies.length>0 && this.props.genres.length>0 ? <GenreContainer /> : ''}
            </div>
        </div>
        
        )
    }
}

export default MoviesIndex;