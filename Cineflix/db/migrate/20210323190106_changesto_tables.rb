class ChangestoTables < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :year, :integer
    remove_column :genres, :movie_id
  end
end
