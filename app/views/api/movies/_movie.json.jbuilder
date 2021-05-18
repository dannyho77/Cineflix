json.extract! movie, :id, :title, :description, :year, :rating, :runtime

json.photoURL url_for(movie.photo)
json.movieURL url_for(movie.video)