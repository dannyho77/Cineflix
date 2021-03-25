json.extract! movie, :id, :title, :description, :year

json.photoURL url_for(movie.photo)
json.movieURL url_for(movie.movie)