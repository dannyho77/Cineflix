import React from 'react';
import { Link } from 'react-router-dom';

class GenreItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {preview: null, muted: true};
      this.handleSound = this.handleSound.bind(this);
      this.handleAddRemove = this.handleAddRemove.bind(this);
    }

    handleSound(){
        e.preventDefault();
        this.setState({muted:!this.state.muted});
    }

    handleAddRemove(){
        const {
            mylists,
            movie,
            addToMyList,
            removeFromMyList,
            currentUser
        } = this.props;

        const mylist = mylists.find(mylist => {
            mylist.movie_id === movie.id
        });

        if (mylist) {
            removeFromMyList(mylist.id);
        } else {
            addToMyList({
                user_id: currentUser.id,
                movie_id: movie.id
            });
        }
    }

    render(){
        const {movie, mylists, movies} = this.props;
        const listarr = Object.keys(mylists);
        const mylist = listarr.find(mylist => {
            mylist.movie_id === movie.id
        });
        
        const thumbnail = <img src={movie.photoURL} />;
        const {muted} = this.state;
        const previewing = (this.state.preview === movie.id);

        const sound = muted ? (
            <button className="sound-button" onClick={this.handleSound}>
                <i className="fas fa-volume-mute"></i>
            </button>
            ) : (
            <button className="sound-button" onClick={this.handleSound}>
                <i className="fas fa-volume-up"></i>
            </button>
        );

        const listbutton = (
            <button onClick = {this.handleAddRemove}>
                { mylist? (
                    <i className="far fa-times-circle"></i>
                ) : (
                    <i className="fas fa-plus-circle"></i>
                )}
            </button>
        );

        const preview = (
            <div className = "single-movie">
                <Link to = {`/movies/${movie.id}`}>
                    <video className = "single-movie-video" autoPlay>
                        <source src = {movie.movieURL} type="video/mp4"/>
                        {sound}
                    </video>
                </Link>
                <div className ="single-movie-controls">
                    <Link to = {`/movies/${movie.id}`}>
                        <i className="fas fa-play-circle"></i>
                    </Link>
                    {listbutton}
                </div>
                <div className ="single-movie-info">
                    {movie.rating}.{movie.year}.{movie.runtime}
                </div>
            </div>
        );

        return(
            <div className = "genre-movie" onMouseEnter = {() => this.setState({ preview: movie.id })} onMouseLeave = {() => this.setState({ preview: null })}>
                {previewing ? preview : thumbnail}
            </div>
        );
    }
}

export default GenreItem;