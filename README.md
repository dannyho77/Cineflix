![logo](https://cineflix-dev.s3.amazonaws.com/logo.png)  
[Live Link](https://cineflix77.herokuapp.com/)

## Background
Cineflix is a Netflix clone, built from scratch, where users can watch and enjoy movie trailers/clips.
The app organizes movies by distinct genre categories.
Logged in users can add and remove movies to/from a personal collection.
Users may also search for movies by title.  

Cineflix utilizes a ruby on rails backend to provide a framework for core app data, such as individual user data, movie and media information, genre data, and CRUD functionality for adding and removing movies to/from a user's personal collection. PostgreSQL is used to query/interact with the database. On the frontend, React/Redux is implemented to connect the backend data to a clean and intuitive user interface. For example, there are dedicated 'genre-show' pages that only show movies in a specific genre, as well as a dynamic 'my list' page, showing a users saved movies. Lastly, Amazon Web Services (S3) is used as server-side storage to house multimedia files related to all movies.

## Technologies
- Ruby on Rails
- React/Redux
- PostgreSQL
- Amazon Web Services (S3)
- Webpack

## Features

### User Auth
- Users can securely sign up and create a personal Cineflix account.
- Users who would like to sample the app first, may log in as a demo user to browse the site and test its functionality.
- Users can only browse/access movie titles through a valid Cineflix account (or through the provided demo account).

### Browse Titles
- Upon logging in, users are directed to the main Cineflix page, displaying a main featured movie as well as an index of all Cineflix titles organized by genre.
- The featured movie autoplays on the main page, and all other individual movie titles are displayed in 'movie tiles', in their respective genre categories.
- Movie tiles expand and autoplay their trailers upon hover. Such movie's details (rating, year, runtime) are also displayed on hovering the movie tile (related .gif and code snippet below).  
![movietile](https://media.giphy.com/media/0EkDoKGMKZrcpEnZeO/giphy.gif)  
```c
const preview = (
            movie ? 
            <div className = "single-movie">
                <Link to = {`/showmovie/${movie.id}`}>
                    <video className = "movie-thumb" muted = {this.state.muted} autoPlay>
                        <source className = "movie-thumb" src = {movie.movieURL} type="video/mp4"/>
                    </video>
                </Link>
                    <div className = "single-movie-container">
                        <div className ="single-movie-controls">
                            <Link to = {`/showmovie/${movie.id}`}>
                                <img id = 'play-button' src="https://cineflix-dev.s3.amazonaws.com/play-button.png"/>
                            </Link>
                            {listbutton}
                            {sound}
                        </div>
                        <div className ="single-movie-info">
                            rating: {movie.rating}  |  {movie.year}  |  {movie.runtime}
                        </div>
                    </div>
            </div> : <p>none</p>
        );

        return(
            <div onMouseEnter = {() => this.setState({ preview: movie.id })} onMouseLeave = {() => this.setState({ preview: null })}>
                {previewing ? preview : thumbnail}
            </div>
        );
```

### Genres
- Logged in users have access to a genre-dropdown menu in a site-wide navbar.
- Clicking on a specific genre link in the aforementioned genre-dropdown, direct the user to a dedicated 'genre-show-page', that displays all Cineflix movie titles belong to a specific genre.
- All 'hover' effects/functionality with regard to movie tiles are retained here.

### Add/Remove Titles to/from a personal collection
- Users can add or remove a movie to/from their personal collection via hovering a movie tile and clicking on the add/remove button.
- Movies that are already in a user's collection will only display the remove option and vice-versa (_see_ code snippet below).
- There is a dedicated link to a user's personal movie collection in the site-wide navbar.
- Adding and removing movies from a user's collection is dynamic and updated in real-time (_see_ code snippet below).  
```c
handleAdd(e){
        const { movie, addToMyList, fetchMyLists } = this.props;

        addToMyList(movie.id).then(fetchMyLists);
    }

    handleRemove(e){
        const { movie, removeFromMyList, fetchMyLists } = this.props;

        removeFromMyList(movie.id).then(fetchMyLists);
    }

    render(){
        const {movie, mylists, currentUser} = this.props;

        let added = 0;

        mylists.forEach(listitem => {
            if(listitem.user_id === parseInt(currentUser.id)){
                if(listitem.movie_id === movie.id){
                    added += 1;
                }
            }
        })

        const listbutton = (added > 0) ? (
                <img className = 'list-button' src="https://cineflix-dev.s3.amazonaws.com/x-mark.png" onClick = {this.handleRemove}/>
                    ) : (
                <img className = 'list-button' src="https://cineflix-dev.s3.amazonaws.com/check-mark.png" onClick = {this.handleAdd}/>
        );
```

### Search
- Cineflix implements the well-known 'fuzzy-search' library, that allows users to search for a specific movie by title.
- The fuzzy-search function accounts for user input error, by displaying possible related movie titles despite spelling errors.
- The search function is also dynamic, in that, as soon as the user starts typing in the search field, related titles will automatically appear as movie tiles.  
![search](https://media.giphy.com/media/xrNk5ql98ldY5uaQyH/giphy.gif)
