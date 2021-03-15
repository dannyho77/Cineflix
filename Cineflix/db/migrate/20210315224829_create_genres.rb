class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.string :genre, null: false
      t.integer :movie_id, null: false

      t.timestamps
    end
    add_index :genres, :movie_id, unique: true
  end
end
