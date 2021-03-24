class RemoveIndexFromMyListandMovieGenre < ActiveRecord::Migration[5.2]
  def change
    remove_index :my_lists, :movie_id
    remove_index :my_lists, :user_id
    remove_index :movie_genres, :genre_id
    remove_index :movie_genres, :movie_id
    add_index :my_lists, :movie_id
    add_index :my_lists, :user_id
    add_index :movie_genres, :genre_id
    add_index :movie_genres, :movie_id
  end
end
