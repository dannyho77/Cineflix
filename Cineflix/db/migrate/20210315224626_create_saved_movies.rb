class CreateSavedMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_movies do |t|
      t.integer :user_id, null: false
      t.integer :movie_id, null: false

      t.timestamps
    end
    add_index :saved_movies, :user_id, unique: true
    add_index :saved_movies, :movie_id, unique: true
  end
end
