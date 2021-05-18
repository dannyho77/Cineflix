const selectMovies = (state, genre) => {
    
  let selected = []; 
  Object.values(state.entities.movies).forEach((movie) => {
      if (movie.genres.includes(genre)) {
          selected.push(movie)
      }
  })
  
  return selected;
  
};
  
  export default selectMovies;